import * as React from "react";

import { PostCardProps } from "./PostCard.d";

const PostCard: React.FC<PostCardProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default PostCard;
