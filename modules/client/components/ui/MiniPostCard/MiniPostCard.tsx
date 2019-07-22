import * as React from "react";

import { MiniPostCardProps } from "./MiniPostCard.d";

const MiniPostCard: React.FC<MiniPostCardProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default MiniPostCard;
