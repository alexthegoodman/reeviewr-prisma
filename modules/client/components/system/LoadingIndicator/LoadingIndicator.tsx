import * as React from "react";

import { LoadingIndicatorProps } from "./LoadingIndicator.d";
import { Spinner, Text } from "@blueprintjs/core";

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  loadingText = "Loading...",
}) => {
  const clickHandler = e => onClick(e);
  return (
    <div className="loadingContain">
      <Spinner className="loadingIndicator" />
      <Text tagName="span" className="loadingText">
        {loadingText}
      </Text>
    </div>
  );
};

export default LoadingIndicator;
