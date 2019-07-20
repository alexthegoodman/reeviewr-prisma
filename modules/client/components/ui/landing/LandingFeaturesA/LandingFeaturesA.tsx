import * as React from "react";

import { LandingFeaturesAProps } from "./LandingFeaturesA.d";

const LandingFeaturesA: React.FC<LandingFeaturesAProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <>Features</>;
};

export default LandingFeaturesA;
