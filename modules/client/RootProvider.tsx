import * as React from "react";
import ErrorBoundary from "react-error-boundary";

import * as mixpanel from "mixpanel-browser";
import { MixpanelProvider } from "react-mixpanel";
import { Router, View } from "react-navi";
// import { ApolloProvider } from "react-apollo";
import { ApolloProvider } from "react-apollo-hooks";

import App from "./components/layout/App/App";
import routes from "./routes";

import ErrorFallback from "./components/pages/status/ErrorFallback/ErrorFallback";
import { ErrorHandler } from "./services/ErrorHandler";
import { AppContextAPI } from "./context/AppContextAPI";
import client from "./services/ApolloClient";
import { CookiesProvider } from "react-cookie";

const styles = require("./sass/style.scss");

mixpanel.init(process.env.MIXPANEL_SECRET);

interface AppProviderProps {}

interface RootProviderProps {}

export const AppProvider: React.FC<AppProviderProps> = props => {
  return (
    <AppContextAPI>
      <App>
        {/* <React.Suspense fallback={<span>Loading mechanics...</span>}> */}
        <View />
        {/* </React.Suspense> */}
      </App>
    </AppContextAPI>
  );
};

const RootProvider: React.FC<RootProviderProps> = props => {
  // mixpanel.track("TEST EVENT: Initialize RootProvider");

  return (
    <ErrorBoundary onError={ErrorHandler} FallbackComponent={ErrorFallback}>
      <MixpanelProvider mixpanel={mixpanel}>
        <ApolloProvider client={client}>
          {/** TODO: Good spot for Layout if desire no rerender, consider best placement for context */}
          <CookiesProvider>
            <Router routes={routes}>
              <AppProvider />
            </Router>
          </CookiesProvider>
        </ApolloProvider>
      </MixpanelProvider>
    </ErrorBoundary>
  );
};

export default RootProvider;
