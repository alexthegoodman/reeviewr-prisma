import * as React from "react";
import { ErrorFallbackProps } from "./ErrorFallback.d";

const ErrorFallback: React.FC<ErrorFallbackProps> = (error, componentStack) => {
  return (
    <>
      <p>
        <strong>Oops! An error occured!</strong>
      </p>
      <p>Here’s what we know…</p>
      <p>
        <strong>Error:</strong>
        {typeof error !== "undefined" ? error.toString() : "undefined"}
      </p>
      <p>
        <strong>Stacktrace:</strong> {componentStack}
      </p>
    </>
  );
};

export default ErrorFallback;
