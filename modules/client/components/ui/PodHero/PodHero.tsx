import * as React from "react";

import { PodHeroProps } from "./PodHero.d";

const PodHero: React.FC<PodHeroProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default PodHero;
