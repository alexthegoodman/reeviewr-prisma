import * as React from "react";

import { TrackProps } from "./Track.d";

const Track: React.FC<TrackProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default Track;
