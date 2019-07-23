import * as React from "react";

import { PostAudioViewerProps } from "./PostAudioViewer.d";

const PostAudioViewer: React.FC<PostAudioViewerProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default PostAudioViewer;
