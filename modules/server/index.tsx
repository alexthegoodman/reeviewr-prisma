import * as compression from "compression";
import * as config from "config";
import * as express from "express";
import { formatError, GraphQLError } from "graphql";
import { graphiqlExpress, graphqlExpress } from "graphql-server-express";
import { sortBy } from "lodash-es";
import * as morgan from "morgan";
import * as db from "../db";
import md5 from "md5";
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

const Arena = require("bull-arena");
const knex = db.getConnection();
const knexLogger = require("knex-logger");
const enforce = require("express-sslify");
const expressStaticGzip = require("express-static-gzip");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");

if (typeof window === "undefined") {
  global["window"] = {};
}

// import fetch from "node-fetch";
import fetch from "cross-fetch";
import * as React from "react";
// import * as ReactDOM from "react-dom";
import * as ReactDOMServer from "react-dom/server";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { AppProvider } from "../client/RootProvider";
import { Router } from "react-navi";
import routes from "../client/routes";
import { createMemoryNavigation } from "navi";
import { Html } from "../client/Html";
import {
  AUTHENTICATE_USER,
  CONFIRM_EMAIL,
  CREATE_USER,
  FORGOT_PASSWORD,
  RESEND_EMAIL_CONFIRMATION,
  CREATE_TRACK,
  RESET_PASSWORD,
} from "./routes";
import { authenticate } from "./user/authenticate";
import { confirmEmail } from "./user/confirm-email";
import { createUser } from "./user/create-user";
import { forgotPassword } from "./user/forgot-password";
import { resendEmailConfirmation } from "./user/resend-email-confirmation";
import { createTrack } from "./userTracks/create-track";
import {
  getMarkupFromTree,
  ApolloProvider as ApolloHooksProvider,
} from "react-apollo-hooks";

import cors from "cors";
import { prisma } from "../../__generated__/prisma-client";
import bcrypt from "bcrypt";
import { resetPassword } from "./user/reset-password";
import Utility from "../services/Utility";

const serveStatic = require("serve-static");
const path = require("path");
const csp = require("helmet-csp");
const Mixpanel = require("mixpanel");

let app = express();

export const port = config.get<number>("server.port");
export const apiHost = config.get<number>("server.apiHost");
export const publicHost = config.get<number>("server.publicHost");

export const enableDeveloperLogin = config.get<boolean>(
  "server.enableDeveloperLogin"
);

export async function startServer() {
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: true,
    })
  );

  // Logging
  app.use(morgan("short"));
  app.use(knexLogger(knex));

  // Force SSL.
  if (config.get("server.requireSsl")) {
    app.use(
      enforce.HTTPS({
        trustProtoHeader: true,
      })
    );
  }

  // Gzip support
  app.use(compression());

  var allowedOrigins = [
    "http://localhost:3000",
    "http://reeviewr.com",
    "http://reeviewr-prisma.herokuapp.com",
  ];

  app.use(
    cors({
      credentials: true,
      origin: function(origin, callback) {
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
          var msg =
            "The CORS policy for this site does not " +
            "allow access from the specified Origin.";
          return callback(new Error(msg), false);
        }

        return callback(null, true);
      },
    })
  );

  app.use((req, res, next) => {
    res.header("Referrer-Policy", "no-referrer");
    next();
  });

  // app.use(
  //   csp({
  //     // Specify directives as normal.
  //     directives: {
  //       // defaultSrc: ["'self'", "default.com"],
  //       // scriptSrc: ["'self'", "'unsafe-inline'"],
  //       // styleSrc: ["style.com"],
  //       // fontSrc: ["'self'", "fonts.com"],
  //       // imgSrc: ["img.com", "data:"],
  //       // sandbox: ["allow-forms", "allow-scripts"],
  //       // reportUri: "/report-violation",
  //       // objectSrc: ["'none'"],
  //       // upgradeInsecureRequests: true,
  //       // workerSrc: false, // This is not set.
  //       frameAncestors: ["facebook.com"],
  //     },
  //     // loose: false,
  //     // reportOnly: false,
  //     // setAllHeaders: false,
  //     // disableAndroid: false,
  //     // browserSniff: true,
  //   })
  // );

  app.use(require("cookie-parser")());
  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
  app.use(
    require("express-session")({
      secret: "keyboard cat",
      resave: true,
      saveUninitialized: true,
    })
  );

  // Static assets
  // app.use(expressStaticGzip("./dist/"));
  app.use("/public", express.static("./dist/"));

  console.info("start server");

  const apiVersion = "v1.0";

  const utility = new Utility();

  passport.use(
    new LocalStrategy(
      {
        usernameField: "email", // define the parameter in req.body that passport can use as username and password
        passwordField: "password",
      },
      async function(email: string, password: string, done) {
        console.info(email, password);

        let user = await prisma.user({ userEmail: email });

        if (utility.isDefinedWithContent(user)) {
          const match = await bcrypt.compare(password, user.userPassword);
          if (match) {
            return done(null, user, { message: "Valid password." });
          } else {
            return done(null, false, { message: "Invalid password." });
          }
        } else {
          return done(null, false, { message: "Invalid email." });
        }
      }
    )
  );

  console.info("start get");

  app.use(passport.initialize());
  app.use(passport.session());

  const mixpanel = Mixpanel.init("3e76355b0e756ed9cf5a9f5037497225", {
    protocol: "https",
  });

  console.info("api", `${apiVersion}${AUTHENTICATE_USER}`);
  app.get(`/`, (req, res) => {
    return res.json({ success: true });
  });
  app.post(
    `/${apiVersion}${AUTHENTICATE_USER}`,
    // passport.authenticate("local"),
    (req, res) => authenticate(req, res, passport, mixpanel)
  );
  app.post(`/${apiVersion}${CONFIRM_EMAIL}`, (req, res) =>
    confirmEmail(req, res, mixpanel)
  );
  app.post(`/${apiVersion}${CREATE_USER}`, (req, res) =>
    createUser(req, res, mixpanel)
  );
  app.post(`/${apiVersion}${FORGOT_PASSWORD}`, (req, res) =>
    forgotPassword(req, res, mixpanel)
  );
  app.post(`/${apiVersion}${RESET_PASSWORD}`, (req, res) =>
    resetPassword(req, res, mixpanel)
  );
  app.post(`/${apiVersion}${RESEND_EMAIL_CONFIRMATION}`, (req, res) =>
    resendEmailConfirmation(req, res, mixpanel)
  );
  app.post(`/${apiVersion}${CREATE_TRACK}`, (req, res) =>
    createTrack(req, res, mixpanel)
  );

  app.get(
    "/*",
    // Authentication.ensureAuthenticatedAndRedirect,
    async (req, res) => {
      let prismaUri = process.env.PRISMA_API_LOCAL;
      if (process.env.NODE_ENV !== "development") {
        prismaUri = process.env.PRISMA_API_PROD;
      }

      // console.info("req 2", req);
      const client = new ApolloClient({
        ssrMode: true,
        // Remember that this is the interface the SSR server will use to connect to the
        // API server, so we need to ensure it isn't firewalled, etc
        link: createHttpLink({
          uri: prismaUri,
          // credentials: "same-origin",
          // headers: {
          //   cookie: req.header("Cookie"),
          // },
          fetch,
        }),
        cache: new InMemoryCache(),
      });

      // const context = {};
      // https://frontarm.com/navi/en/reference/navigation/#creatememorynavigation
      let navigation = createMemoryNavigation({
        routes,
        url: req.url,
      });

      const App = () => (
        <>
          <Router navigation={navigation}>
            <ApolloProvider client={client}>
              <ApolloHooksProvider client={client}>
                <AppProvider />
              </ApolloHooksProvider>
            </ApolloProvider>
          </Router>
        </>
      );

      // getDataFromTree(App).then(() => {
      //   const content = ReactDOMServer.renderToString(App);
      //   const initialState = client.extract();

      //   const html = <Html content={content} state={initialState} />;

      //   console.info("send response");

      //   res.status(200);
      //   res.send(
      //     `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`
      //   );
      //   res.end();
      // });
      console.info("get data");
      const rendered = await getMarkupFromTree({
        renderFunction: ReactDOMServer.renderToString,
        tree: <App />,
      });

      console.info("render");
      // const content = ReactDOMServer.renderToString(<App />);
      const initialState = client.extract();

      const html = <Html content={rendered} state={initialState} />;

      console.info("send response");

      res.status(200);
      res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`);
      res.end();
      // res.sendFile(process.cwd() + "/dist/index.html");
    }
  );

  return app.listen(port, () => {
    console.log(
      "up and running on port",
      port,
      "apiHost: ",
      apiHost,
      " publicHost: ",
      publicHost
    );
  });
}
