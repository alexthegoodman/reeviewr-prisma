// import "client/bootstrap-mui"; // this must be the first import
// import * as ErrorNotifier from "atomic-object/error-notifier";
// import { createBrowserHistory } from "history";
import * as React from "react";
// import { ApolloProvider } from "react-apollo";
// import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import * as ReactDom from "react-dom";
// import { Router } from "react-router-dom";
import { App } from "../modules/client";

// const history = createBrowserHistory();
// history.listen((location, action) => {
//   if (process.env.TRACKING_ID) {
//     window.ga("send", "pageview", location.pathname + location.search);
//   }
// });

const bootstrapClient = () => {
  // if (process.env.TRACKING_ID) {
  //   GALoader.loadGA();
  // }

  // ErrorNotifier.setup(process.env.ROLLBAR_CLIENT_ACCESS_TOKEN, {
  //   captureUncaught: false,
  //   captureUnhandledRejections: false,
  // });

  // window.onerror = (message, filename?, lineno?, colno?, error?) => {
  //   console.error("OnError: ", message, error);
  //   ErrorNotifier.error(message, error);
  //   history.push("/error");
  // };

  // window.onunhandledrejection = event => {
  //   const error = event.reason;
  //   console.error("OnUnhandledRejection: ", error);
  //   ErrorNotifier.error(error);
  //   history.push("/error");
  // };

  // const graphqlClient = buildGraphqlClient(history);

  const rootEl = <App />;
  ReactDom.render(
    (rootEl as any) as React.ReactElement<any>,
    document.getElementById("app")
  );
};

bootstrapClient();
