import * as React from "react";

import { ReviewItemProps } from "./ReviewItem.d";

const ReviewItem: React.FC<ReviewItemProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default ReviewItem;
