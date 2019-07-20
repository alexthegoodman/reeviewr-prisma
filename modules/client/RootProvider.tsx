import * as React from "react";
import ErrorBoundary from "react-error-boundary";

import * as mixpanel from "mixpanel-browser";
// import { ApolloProvider } from "react-apollo";
import { ApolloProvider } from "react-apollo-hooks";
import { MixpanelProvider } from "react-mixpanel";
import { Router, View } from "react-navi";

import App from "./components/layout/App/App";
import routes from "./routes";

import * as Sentry from "@sentry/browser";
import { CookiesProvider } from "react-cookie";
import FullStory from "react-fullstory";
import MessengerCustomerChat from "react-messenger-customer-chat";
import ErrorFallback from "./components/pages/status/ErrorFallback/ErrorFallback";
import { AppContextAPI } from "./context/AppContextAPI";
import client from "./services/ApolloClient";
import { ErrorHandler } from "./services/ErrorHandler";

const styles = require("./sass/style.scss");

mixpanel.init(process.env.MIXPANEL_SECRET);

if (process.env.NODE_ENV !== "development") {
  Sentry.init({ dsn: process.env.SENTRY });
}

interface AppProviderProps {}

interface RootProviderProps {}

export const AppProvider: React.FC<AppProviderProps> = props => {
  return (
    <AppContextAPI>
      <View />
    </AppContextAPI>
  );
};

const RootProvider: React.FC<RootProviderProps> = props => {
  return (
    <ErrorBoundary onError={ErrorHandler} FallbackComponent={ErrorFallback}>
      <MixpanelProvider mixpanel={mixpanel}>
        {process.env.NODE_ENV !== "development" ? (
          <>
            <FullStory org="KKJA5" />
            <MessengerCustomerChat
              pageId="431860910314038"
              appId="1534142523521486"
            />
          </>
        ) : (
          <></>
        )}
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
