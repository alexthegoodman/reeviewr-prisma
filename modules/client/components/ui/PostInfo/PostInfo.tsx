import * as React from "react";

import { PostInfoProps } from "./PostInfo.d";

const PostInfo: React.FC<PostInfoProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default PostInfo;
