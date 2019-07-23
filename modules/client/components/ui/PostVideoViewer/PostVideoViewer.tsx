import * as React from "react";

import { PostVideoViewerProps } from "./PostVideoViewer.d";

const PostVideoViewer: React.FC<PostVideoViewerProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default PostVideoViewer;
