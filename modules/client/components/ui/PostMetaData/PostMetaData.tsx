import * as React from "react";

import { PostMetaDataProps } from "./PostMetaData.d";

const PostMetaData: React.FC<PostMetaDataProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default PostMetaData;
