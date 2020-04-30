import * as React from "react";

import { Text } from "@blueprintjs/core";
import { NoResultsProps } from "./NoResults.d";

const NoResults: React.FC<NoResultsProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <>
      <Text tagName="h1">Wait!</Text>
      <Text tagName="p">You have not joined any pods</Text>
    </>
  );
};

export default NoResults;
