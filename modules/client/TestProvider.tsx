import * as React from "react";
import ErrorBoundary from "react-error-boundary";

import ErrorFallback from "./components/pages/status/ErrorFallback/ErrorFallback";
import { ErrorHandler } from "./services/ErrorHandler";
import { AppContextAPI } from "./context/AppContextAPI";

const styles = require("./sass/style.scss");

interface TestProviderProps {}

const TestProvider: React.FC<TestProviderProps> = ({ children }) => {
  return (
    <ErrorBoundary onError={ErrorHandler} FallbackComponent={ErrorFallback}>
      <AppContextAPI>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: 50,
          }}
        >
          {children}
        </div>
      </AppContextAPI>
    </ErrorBoundary>
  );
};

export default TestProvider;
