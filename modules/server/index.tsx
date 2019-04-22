import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as config from "config";
import * as express from "express";
import { formatError, GraphQLError } from "graphql";
import { graphiqlExpress, graphqlExpress } from "graphql-server-express";
import { sortBy } from "lodash-es";
import * as morgan from "morgan";
import * as passport from "passport";
import * as db from "../db";

const Arena = require("bull-arena");
const knex = db.getConnection();
const knexLogger = require("knex-logger");
const enforce = require("express-sslify");
const expressStaticGzip = require("express-static-gzip");
const cookieSession = require("cookie-session");

global["window"] = {};

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

let app = express();

export const port = config.get<number>("server.port");
export const apiHost = config.get<number>("server.apiHost");
export const publicHost = config.get<number>("server.publicHost");

export const enableDeveloperLogin = config.get<boolean>(
  "server.enableDeveloperLogin"
);

export function startServer() {
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  // app.use(
  //   cookieSession({
  //     name: "session",
  //     secret: config.get<string>("server.secret"),
  //   })
  // );

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

  // if (config.get("server.basicAuthPassword")) {
  //   app.use(enforcePasswordIfSpecified(config.get("server.basicAuthPassword")));
  // }

  // Gzip support
  app.use(compression());

  // app.use(passport.initialize());
  // app.use(passport.session());

  // app.use(
  //   "/arena",
  //   new Arena(
  //     {
  //       queues: [
  //         {
  //           name: "main",
  //           prefix: config.get("redis.prefix"),
  //           hostId: "redis",
  //           redis: config.get("redis.url"),
  //         },
  //       ],
  //     },
  //     {
  //       // Make the arena dashboard become available at {my-site.com}/arena.
  //       // basePath: "/arena",

  //       // Let express handle the listening.
  //       disableListen: true,
  //     }
  //   )
  // );

  // app.get(AuthRoutes.USER_NOT_FOUND, (req, res) => {
  //   res.sendFile(process.cwd() + "/dist/index.html");
  // });

  // Static assets
  // app.use(expressStaticGzip("./dist/"));
  app.use(express.static("./dist/"));

  console.info("start server");

  const apiVersion = "1.0";

  // console.info("building");

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

  app.get(["", "/"], function(req, res) {
    console.info("get req");
    res.send({ hello: true });
  });

  // app.get(`/${apiVersion}${AUTHENTICATE_USER}`, authenticate);
  // app.get(`/${apiVersion}${CONFIRM_EMAIL}`, confirmEmail);
  // app.get(`/${apiVersion}${CREATE_USER}`, createUser);
  // app.get(`/${apiVersion}${FORGOT_PASSWORD}`, forgotPassword);
  // app.get(
  //   `/${apiVersion}/${RESEND_EMAIL_CONFIRMATION}`,
  //   resendEmailConfirmation
  // );
  // app.get(`/${apiVersion}/${CREATE_TRACK}`, createTrack);

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
