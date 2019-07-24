import * as React from "react";

import { Text } from "@blueprintjs/core";
import { Link } from "react-navi";
import PostInteraction from "../PostInteraction/PostInteraction";
import QuestionItem from "../QuestionItem/QuestionItem";
import { PostQuestionsProps } from "./PostQuestions.d";

const PostQuestions: React.FC<PostQuestionsProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <PostInteraction
      header={
        <>
          <Text tagName="h3">Questions</Text>
          <Link href="#!">All questions</Link>
        </>
      }
      ctrls={<></>}
    >
      <QuestionItem />
      <QuestionItem />
    </PostInteraction>
  );
};

export default PostQuestions;
