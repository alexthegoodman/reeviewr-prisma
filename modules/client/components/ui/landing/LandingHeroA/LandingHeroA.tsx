import * as React from "react";

import { LandingHeroAProps } from "./LandingHeroA.d";

const LandingHeroA: React.FC<LandingHeroAProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <>Hero</>;
};

export default LandingHeroA;
