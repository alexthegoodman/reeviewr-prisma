import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import ErrorBoundary from "react-error-boundary";
import { Provider } from "react-redux";

import * as mixpanel from "mixpanel-browser";
import { MixpanelProvider } from "react-mixpanel";
mixpanel.init("10aaa568c26139b294dad351b69630b0");

import ErrorFallback from "./components/ErrorFallback/ErrorFallback";
import DevTools from "./containers/DevTools/DevTools";
import getRoutes from "./routes/routes";
import { ErrorHandler } from "./services/ErrorHandler";

export default class RootProvider {
  constructor() {}

  getProvider(store, history) {
    /**
     * General Providers
     */
    const rootProviders = (
      <ErrorBoundary onError={ErrorHandler} FallbackComponent={ErrorFallback}>
        <MixpanelProvider mixpanel={mixpanel}>
          <ConnectedRouter history={history}>
            {getRoutes(store)}
          </ConnectedRouter>
        </MixpanelProvider>
      </ErrorBoundary>
    );

    /**
     * Redux DevTools
     */
    let rootProvider;
    if (process.env.__DEVTOOLS__) {
      rootProvider = (
        <Provider store={store} key="provider">
          <div>
            {rootProviders}
            <DevTools />
          </div>
        </Provider>
      );
    } else {
      rootProvider = (
        <Provider store={store} key="provider">
          <div>{rootProviders}</div>
        </Provider>
      );
    }

    return rootProvider;
  }
}
