import * as compression from "compression";
import * as config from "config";
import * as express from "express";
import { formatError, GraphQLError } from "graphql";
import { graphiqlExpress, graphqlExpress } from "graphql-server-express";
import { sortBy } from "lodash-es";
import md5 from "md5";
import * as morgan from "morgan";
import * as db from "../db";
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const Arena = require("bull-arena");
const knex = db.getConnection();
const knexLogger = require("knex-logger");
const enforce = require("express-sslify");
const expressStaticGzip = require("express-static-gzip");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const wwwhisper = require("connect-wwwhisper");

if (typeof window === "undefined") {
  global["window"] = {};
}

// import fetch from "node-fetch";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import fetch from "cross-fetch";
import { GraphQLServer } from "graphql-yoga";
import { createMemoryNavigation } from "navi";
import * as React from "react";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import {
  ApolloProvider as ApolloHooksProvider,
  getMarkupFromTree,
} from "react-apollo-hooks";

// import * as ReactDOM from "react-dom";
import * as ReactDOMServer from "react-dom/server";
import { Router } from "react-navi";
import { Html } from "../client/Html";
import { AppProvider } from "../client/RootProvider";
import routes from "../client/routes";
import {
  AUTHENTICATE_USER,
  COMPLETE_PROFILE,
  CONFIRM_EMAIL,
  CREATE_TRACK,
  CREATE_USER,
  FORGOT_PASSWORD,
  MAILCHIMP_SUBSCRIBE,
  RESEND_EMAIL_CONFIRMATION,
  RESET_PASSWORD,
} from "./routes";
import { authenticate } from "./user/authenticate";
import { confirmEmail } from "./user/confirm-email";
import { createUser } from "./user/create-user";
import { forgotPassword } from "./user/forgot-password";
import { resendEmailConfirmation } from "./user/resend-email-confirmation";
import { createTrack } from "./userTracks/create-track";

// import { prisma } from "../../__generated__/prisma-client";
import { nexusPrismaPlugin } from "@generated/nexus-prisma";
import datamodelInfo from "@generated/nexus-prisma";
import Photon from "@generated/photon";
import { idArg, makeSchema, objectType } from "@prisma/nexus";
import bcrypt from "bcrypt";
import cors from "cors";
import { makePrismaSchema } from "nexus-prisma";
import Utility from "../services/Utility";
import { mailchimpSubscribe } from "./integration/mailchimp-subscribe";
import { completeProfile } from "./user/complete-profile";
import { resetPassword } from "./user/reset-password";

const serveStatic = require("serve-static");
const path = require("path");
const csp = require("helmet-csp");
const Mixpanel = require("mixpanel");

const Query = objectType({
  name: "Query",
  definition(t) {
    t.crud.findOneUser();
    t.crud.findManyUser();
  },
});

// Customize the "Mutation" building block
const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    // Expose only the `createTodo` mutation (`updateTodo` and `deleteTodo` not exposed)
    t.crud.createOneUser();
  },
});

const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.userType();
    t.model.userEmail();
    // t.model.userPassword();
    t.model.publicHash();
    t.model.privateHash();
    t.model.confirmHash();
    t.model.forgotHash();
    t.model.userConfirmed();
    t.model.userDeleted();
    // t.model.userMeta();
    // t.model.posts();
    // t.model.reviews();
  },
});

const photon = new Photon();

const nexusPrisma = nexusPrismaPlugin({
  photon: ctx => photon,
});

const schema = makeSchema({
  types: [User, Query, Mutation, nexusPrisma],
  outputs: {
    schema: path.join(__dirname, "../__generated__/schema.graphql"),
    typegen: path.join(__dirname, "../__generated__/nexus.ts"),
  },
  typegenAutoConfig: {
    sources: [
      {
        source: "@generated/photon",
        alias: "photon",
      },
      // {
      //   source: path.join(__dirname, "types.ts"),
      //   alias: "ctx",
      // },
    ],
    // contextType: "ctx.Context",
  },
});

// const schema = makePrismaSchema({
//   types: [nexusPrisma],

//   prisma: {
//     client: photon,
//     datamodelInfo,
//   },

//   // outputs: {
//   //   schema: path.join(__dirname, "../__generated__/schema.graphql"),
//   //   typegen: path.join(__dirname, "../__generated__/nexus.ts"),
//   // }
// });

const graphqlServer = new GraphQLServer({
  schema,
  context: { photon },
});

const app = express();

export const port = config.get<number>("server.port");
export const apiHost = config.get<number>("server.apiHost");
export const publicHost = config.get<number>("server.publicHost");

export const enableDeveloperLogin = config.get<boolean>(
  "server.enableDeveloperLogin"
);

export async function startServer() {
  await photon.connect();

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

  // Closed beta password protection
  // app.use(wwwhisper());

  const allowedOrigins = [
    "http://localhost:3000",
    "http://reeviewr.com",
    "http://reeviewr-prisma.herokuapp.com",
    "http://2019.reeviewr.com",
    "https://reeviewr.com",
    "https://reeviewr-prisma.herokuapp.com",
    "https://2019.reeviewr.com",
  ];

  app.use(
    cors({
      credentials: true,
      origin(origin, callback) {
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if (!origin) {
          return callback(null, true);
        }

        if (allowedOrigins.indexOf(origin) === -1) {
          const msg =
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

  // add to ENV
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

        const user = await photon.users.findOne({
          where: { userEmail: email },
        });

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

  // TODO: fetch from ENV
  const mixpanel = Mixpanel.init("3e76355b0e756ed9cf5a9f5037497225", {
    protocol: "https",
  });

  console.info("api", `${apiVersion}${AUTHENTICATE_USER}`);
  app.get(`/${apiVersion}`, (req, res) => {
    return res.json({ success: true });
  });
  app.post(
    `/${apiVersion}${AUTHENTICATE_USER}`,
    // passport.authenticate("local"),
    (req, res) => authenticate(req, res, passport, mixpanel, photon)
  );
  app.post(`/${apiVersion}${CONFIRM_EMAIL}`, (req, res) =>
    confirmEmail(req, res, mixpanel, photon)
  );
  app.post(`/${apiVersion}${CREATE_USER}`, (req, res) =>
    createUser(req, res, mixpanel, photon)
  );
  app.post(`/${apiVersion}${COMPLETE_PROFILE}`, (req, res) =>
    completeProfile(req, res, mixpanel, photon)
  );
  app.post(`/${apiVersion}${FORGOT_PASSWORD}`, (req, res) =>
    forgotPassword(req, res, mixpanel, photon)
  );
  app.post(`/${apiVersion}${RESET_PASSWORD}`, (req, res) =>
    resetPassword(req, res, mixpanel, photon)
  );
  app.post(`/${apiVersion}${RESEND_EMAIL_CONFIRMATION}`, (req, res) =>
    resendEmailConfirmation(req, res, mixpanel, photon)
  );
  app.post(`/${apiVersion}${CREATE_TRACK}`, (req, res) =>
    createTrack(req, res, mixpanel, photon)
  );
  app.post(`/${apiVersion}${MAILCHIMP_SUBSCRIBE}`, (req, res) =>
    mailchimpSubscribe(req, res, mixpanel, photon)
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
      const navigation = createMemoryNavigation({
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

  try {
    app.listen(port, () => {
      console.log(
        "REST API up and running on port",
        port,
        "apiHost: ",
        apiHost,
        " publicHost: ",
        publicHost
      );
    });
  } catch (e) {
    console.error("ERROR", e);
  }

  try {
    graphqlServer.start({ port: 4000, cors: { origin: allowedOrigins } }, () =>
      console.log("GRAPHQL API is running on port 4000")
    );
  } catch (e) {
    console.error("ERROR", e);
  }
}
