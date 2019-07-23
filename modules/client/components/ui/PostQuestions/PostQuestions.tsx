import * as React from "react";

import { PostQuestionsProps } from "./PostQuestions.d";

const PostQuestions: React.FC<PostQuestionsProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default PostQuestions;
