import * as React from "react";
import * as compression from "compression";
import * as config from "config";
import * as express from "express";
import * as morgan from "morgan";
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const enforce = require("express-sslify");
const expressStaticGzip = require("express-static-gzip");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const wwwhisper = require("connect-wwwhisper");

if (typeof window === "undefined") {
  global["window"] = {};
}

// import fetch from "node-fetch";
// import * as ReactDOM from "react-dom";

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import fetch from "cross-fetch";
import { GraphQLServer } from "graphql-yoga";
import { createMemoryNavigation } from "navi";
import * as ReactDOMServer from "react-dom/server";
import { Router } from "react-navi";
import {
  ApolloProvider,
  getDataFromTree,
  getMarkupFromTree,
} from "react-apollo";

import { Html } from "../client/Html";
import { AppProvider } from "../client/RootProvider";
import routes from "../client/routes";
import {
  AUTHENTICATE_USER,
  COMPLETE_PROFILE,
  CONFIRM_EMAIL,
  CREATE_POD,
  CREATE_POST,
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

import bcrypt from "bcrypt";
import cors from "cors";
import Utility from "../services/Utility";
import {
  Annotation,
  AnnotationMeta,
  Category,
  Favorite,
  Message,
  MessageMeta,
  Notification,
  NotificationMeta,
  Pod,
  PodMeta,
  Post,
  PostMeta,
  Question,
  QuestionMeta,
  Review,
  ReviewMeta,
  Tag,
  Thread,
  ThreadMeta,
  User,
  UserMeta,
} from "./graphql/models";
import { Mutation } from "./graphql/mutation";
import { Query } from "./graphql/query";
// import resolvers from "./graphql/resolvers";
import { mailchimpSubscribe } from "./integration/mailchimp-subscribe";
import { createPod } from "./pods/create-pod";
import { createPost } from "./posts/create-post";
import { completeProfile } from "./user/complete-profile";
import { resetPassword } from "./user/reset-password";

const serveStatic = require("serve-static");
const path = require("path");
const csp = require("helmet-csp");
const Mixpanel = require("mixpanel");

// import { prisma } from "../../__generated__/prisma-client";
// import { nexusPrismaPlugin } from "@generated/nexus-prisma";
import { nexusPrismaPlugin } from "nexus-prisma";
// import datamodelInfo from "@generated/nexus-prisma";
// import Photon from "@generated/photon";
import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "../../__generated__/prisma-client";
// import { idArg, makeSchema, objectType } from "@prisma/nexus";
import { makeSchema } from "@nexus/schema";
// import { makePrismaSchema } from "nexus-prisma";

import { use } from "nexus";
import { prisma as nexusPrisma } from "nexus-plugin-prisma";
const prisma = new PrismaClient();

// connects to nexus but not nexus/schema?
// schema is also imported from nexus so auto-connect?
use(
  nexusPrisma({
    client: { instance: prisma },
  })
);

// const prisma = new PrismaClient({
//   // log: ["query"],
// });

// const graphqlServer = new GraphQLServer({
//   schema,
//   context: { prisma },
// });

// const nexusPrisma = nexusPrismaPlugin({
//   prismaClient: (ctx) => prisma,
// });

// TODO: move to graphql/index.ts
// https://github.com/graphql-nexus/schema/blob/develop/src/builder.ts
const schema = makeSchema({
  // nullabilityGuard, fieldAuthorizePlugin
  plugins: [nexusPrismaPlugin()],
  // plugins: [nexusPrisma],
  types: [
    Query,
    Mutation,
    User,
    UserMeta,
    Pod,
    PodMeta,
    Post,
    PostMeta,
    Review,
    ReviewMeta,
    Annotation,
    AnnotationMeta,
    Question,
    QuestionMeta,
    Thread,
    ThreadMeta,
    Message,
    MessageMeta,
    Notification,
    NotificationMeta,
    Favorite,
    Tag,
    Category,

    // nexusPrisma,
  ],

  // *** https://www.nexusjs.org/#/components/schema/api/copy/api-makeSchema?id=shouldgenerateartifacts-outputs-typegenautoconfig ***
  shouldGenerateArtifacts: process.env.NODE_ENV === "development",
  outputs: {
    // I tend to use `.gen` to denote "auto-generated" files, but this is not a requirement.
    schema: path.join(__dirname, "../__generated__/schema.gen.graphql"),
    typegen: path.join(__dirname, "../__generated__/nexusTypes.gen.ts"),
  },
  typegenAutoConfig: {
    headers: [
      'import { ConnectionFieldOpts } from "@packages/api-graphql/src/extensions/connectionType"',
    ],
    sources: [
      // Automatically finds any interface/type/class named similarly to the and infers it
      // the "source" type of that resolver.
      {
        source: "@packages/types/src/db.ts",
        alias: "dbt",
        typeMatch: (name) =>
          new RegExp(`(?:interface|type|class)\\s+(${name}s?)\\W`, "g"),
      },
      // We also need to import this source in order to provide it as the `contextType` below.
      {
        source: "@packages/data-context/src/DataContext.ts",
        alias: "ctx",
      },
    ],
    // Typing from the source
    contextType: "ctx.DataContext",
    backingTypeMap: {
      Date: "Date",
      DateTime: "Date",
      UUID: "string",
    },
    debug: false,
  },
  // *** OLD ***
  // outputs: {
  //   schema: path.join(__dirname, "../__generated__/schema.graphql"),
  //   typegen: path.join(__dirname, "../__generated__/nexus.d.ts"),
  // },
  // outputs: {
  //   typegen: path.join(
  //     __dirname,
  //     "node_modules/@types/nexus-typegen/index.d.ts" // good local, not heroku? add def to tsconfig or us .d.ts?
  //   ),
  // },
  // typegenAutoConfig: {
  //   contextType: "Context.Context",
  //   // contextType: "{ prisma: PrismaClient.PrismaClient }",
  //   // sources: [{ source: "@prisma/client", alias: "PrismaClient" }],
  //   sources: [
  //     // {
  //     //   source: path.join(
  //     //     __dirname,
  //     //     "../__generated__/prisma-client/index.d.ts"
  //     //   ),
  //     //   alias: "PrismaClient",
  //     // },
  //     {
  //       source: "@prisma/client",
  //       alias: "prisma",
  //     },
  //     {
  //       source: require.resolve("./context"),
  //       alias: "Context",
  //     },
  //   ],
  // },
  // typegenAutoConfig: {
  //   sources: [
  //     {
  //       source: path.join(__dirname, "../__generated__/prisma-client"),
  //       alias: "prisma",
  //     },
  //   ],
  // },
  // shouldGenerateArtifacts
  // typegenConfig
  // prettierConfig
  // formatTypegen
  // nonNullDefaults
  // customPrintSchemaFn
});

const app = express();

export const port = config.get<number>("server.port");
export const apiHost = config.get<number>("server.apiHost");
export const publicHost = config.get<number>("server.publicHost");

export const enableDeveloperLogin = config.get<boolean>(
  "server.enableDeveloperLogin"
);

const graphqlHTTP = require("express-graphql");

export default async function startServer() {
  await prisma.connect();

  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: true,
    })
  );

  // Logging
  app.use(morgan("short"));
  // app.use(knexLogger(knex));

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
    "http://localhost:3001",
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
      async function (email: string, password: string, done) {
        console.info(email, password);

        let user = null;
        try {
          user = await prisma.user.findOne({
            where: { userEmail: email },
          });
        } catch (err) {
          console.error("PHOTON ERROR:", err);
        }

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
  const mixpanel = Mixpanel.init(process.env.SERVER_MIXPANEL_SECRET, {
    protocol: "https",
  });

  console.info("api", `${apiVersion}${AUTHENTICATE_USER}`);
  app.get(`/${apiVersion}`, (req, res) => {
    return res.json({ success: true });
  });
  app.post(
    `/${apiVersion}${AUTHENTICATE_USER}`,
    // passport.authenticate("local"),
    (req, res) => authenticate(req, res, passport, mixpanel, prisma)
  );
  app.post(`/${apiVersion}${CONFIRM_EMAIL}`, (req, res) =>
    confirmEmail(req, res, mixpanel, prisma)
  );
  app.post(`/${apiVersion}${CREATE_USER}`, (req, res) =>
    createUser(req, res, mixpanel, prisma)
  );
  app.post(`/${apiVersion}${COMPLETE_PROFILE}`, (req, res) =>
    completeProfile(req, res, mixpanel, prisma)
  );
  app.post(`/${apiVersion}${FORGOT_PASSWORD}`, (req, res) =>
    forgotPassword(req, res, mixpanel, prisma)
  );
  app.post(`/${apiVersion}${RESET_PASSWORD}`, (req, res) =>
    resetPassword(req, res, mixpanel, prisma)
  );
  app.post(`/${apiVersion}${RESEND_EMAIL_CONFIRMATION}`, (req, res) =>
    resendEmailConfirmation(req, res, mixpanel, prisma)
  );
  app.post(`/${apiVersion}${MAILCHIMP_SUBSCRIBE}`, (req, res) =>
    mailchimpSubscribe(req, res, mixpanel, prisma)
  );
  app.post(`/${apiVersion}${CREATE_POD}`, (req, res) =>
    createPod(req, res, mixpanel, prisma)
  );
  app.post(`/${apiVersion}${CREATE_POST}`, (req, res) =>
    createPost(req, res, mixpanel, prisma)
  );

  // app.get(
  //   ["/admin", "/admin/*"],
  //   // Authentication.ensureAuthenticatedAndRedirect,
  //   async (req, res) => {

  //   });

  app.use(
    "/graphql",
    graphqlHTTP((request) => {
      return {
        schema,
        context: { prisma },
        graphiql: process.env.NODE_ENV === "development" ? true : false,
      };
    })
  );

  app.get(
    "/*",
    // Authentication.ensureAuthenticatedAndRedirect,
    async (req, res) => {
      // console.info("req 2", req);
      const client = new ApolloClient({
        ssrMode: true,
        // Remember that this is the interface the SSR server will use to connect to the
        // API server, so we need to ensure it isn't firewalled, etc
        link: createHttpLink({
          uri: process.env.PRISMA_API,
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
              <AppProvider />
            </ApolloProvider>
          </Router>
        </>
      );

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

  // try {
  //   // TODO - Playon /graphql
  //   graphqlServer.start({ port: 4000, cors: { origin: allowedOrigins } }, () =>
  //     console.log("GRAPHQL API is running on port 4000")
  //   );
  // } catch (e) {
  //   console.error("ERROR", e);
  // }
}
