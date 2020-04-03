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
      <QuestionItem
        inquiry={{
          userName: "Alex Woodman",
          time: Date.now(),
          text: "Here is the question",
        }}
        answer={{
          userName: "Marco Bulnes",
          time: Date.now(),
          text: "Here is the answer",
        }}
      />
      <QuestionItem
        inquiry={{
          userName: "Alex Woodman",
          time: Date.now(),
          text: "Here is the question",
        }}
        answer={{
          userName: "Marco Bulnes",
          time: Date.now(),
          text: "Here is the answer",
        }}
      />
    </PostInteraction>
  );
};

export default PostQuestions;
