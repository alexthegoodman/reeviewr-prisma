import * as React from "react";
import ErrorBoundary from "react-error-boundary";

import * as mixpanel from "mixpanel-browser";
import { MixpanelProvider } from "react-mixpanel";
import { Router, View } from "react-navi";
import { ApolloProvider } from "react-apollo";

import App from "./components/layout/App/App";
import routes from "./routes";

import ErrorFallback from "./components/pages/status/ErrorFallback/ErrorFallback";
import { ErrorHandler } from "./services/ErrorHandler";
import { AppContextAPI } from "./context/AppContextAPI";
import client from "./services/ApolloClient";

const styles = require("./sass/style.scss");

mixpanel.init(process.env.MIXPANEL_SECRET);

interface RootProviderProps {}

const RootProvider: React.FC<RootProviderProps> = props => {
  // mixpanel.track("TEST EVENT: Initialize RootProvider");

  return (
    <ErrorBoundary onError={ErrorHandler} FallbackComponent={ErrorFallback}>
      <MixpanelProvider mixpanel={mixpanel}>
        <ApolloProvider client={client}>
          <Router routes={routes}>
            {/** TODO: Good spot for Layout if desire no rerender, consider best placement for context */}
            <AppContextAPI>
              <App>
                <React.Suspense fallback={<span>Loading mechanics...</span>}>
                  <View />
                </React.Suspense>
              </App>
            </AppContextAPI>
          </Router>
        </ApolloProvider>
      </MixpanelProvider>
    </ErrorBoundary>
  );
};

export default RootProvider;
