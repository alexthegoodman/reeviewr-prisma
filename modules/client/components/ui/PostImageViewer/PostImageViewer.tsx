import * as React from "react";

import { PostImageViewerProps } from "./PostImageViewer.d";

const PostImageViewer: React.FC<PostImageViewerProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default PostImageViewer;
