import * as React from "react";

import { AdvertisementProps } from "./Advertisement.d";

const Advertisement: React.FC<AdvertisementProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <>Ad Space</>;
};

export default Advertisement;
