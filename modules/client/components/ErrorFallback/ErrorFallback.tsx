import * as React from "react";
import { ErrorFallbackProps } from "./ErrorFallback.d";

export default class ErrorFallback extends React.Component<
  ErrorFallbackProps,
  any
> {
  constructor(props: ErrorFallbackProps) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { error, componentStack } = this.props;

    return (
      <React.Fragment>
        <p>
          <strong>Oops! An error occured!</strong>
        </p>
        <p>Here’s what we know…</p>
        <p>
          <strong>Error:</strong>{" "}
          {typeof error !== "undefined" ? error.toString() : "undefined"}
        </p>
        <p>
          <strong>Stacktrace:</strong> {componentStack}
        </p>
      </React.Fragment>
    );
  }
}
