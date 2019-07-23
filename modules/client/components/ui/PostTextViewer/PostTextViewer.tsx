import * as React from "react";

import { PostTextViewerProps } from "./PostTextViewer.d";

const PostTextViewer: React.FC<PostTextViewerProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default PostTextViewer;
