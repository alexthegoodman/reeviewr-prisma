import * as React from "react";

import { AdvertisementProps } from "./Advertisement.d";

const Advertisement: React.FC<AdvertisementProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <section className="advertisement">Ad Space</section>;
};

export default Advertisement;
