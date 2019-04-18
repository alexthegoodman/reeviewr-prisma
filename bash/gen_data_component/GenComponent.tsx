import * as React from "react";

import { GenComponentProps } from "./GenComponent.d";

const GenComponent: React.FC<GenComponentProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default GenComponent;
