import * as React from "react";

import { LandingBlockAProps } from "./LandingBlockA.d";

const LandingBlockA: React.FC<LandingBlockAProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <>Block</>;
};

export default LandingBlockA;
