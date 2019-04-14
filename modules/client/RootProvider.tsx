import * as React from "react";
import ErrorBoundary from "react-error-boundary";

import * as mixpanel from "mixpanel-browser";
import { MixpanelProvider } from "react-mixpanel";

import ErrorFallback from "./components/pages/status/ErrorFallback/ErrorFallback";
import { ErrorHandler } from "./services/ErrorHandler";
import App from "./components/wrappers/App/App";

const styles = require("./sass/style.scss");

mixpanel.init(process.env.MIXPANEL_SECRET);

interface RootProviderProps {}

const RootProvider: React.FC<RootProviderProps> = props => {
  // mixpanel.track("TEST EVENT: Initialize RootProvider");

  return (
    <ErrorBoundary onError={ErrorHandler} FallbackComponent={ErrorFallback}>
      <MixpanelProvider mixpanel={mixpanel}>
        <App />
      </MixpanelProvider>
    </ErrorBoundary>
  );
};

export default RootProvider;
