import * as React from "react";

import { PostReviewsProps } from "./PostReviews.d";

const PostReviews: React.FC<PostReviewsProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default PostReviews;
