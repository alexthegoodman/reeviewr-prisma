import * as React from "react";

import { PostAnnotationsProps } from "./PostAnnotations.d";

const PostAnnotations: React.FC<PostAnnotationsProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default PostAnnotations;
