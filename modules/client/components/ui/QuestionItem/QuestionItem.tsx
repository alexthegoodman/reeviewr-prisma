import * as React from "react";

import { QuestionItemProps } from "./QuestionItem.d";
import { Button, Comment, Form, Header } from "semantic-ui-react";

const QuestionItem: React.FC<QuestionItemProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  inquiry = {},
  answer = {},
}) => {
  const clickHandler = e => onClick(e);
  return (
    <>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.comhttps://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
          <Comment.Content>
            <Comment.Author as="a">{inquiry.userName}</Comment.Author>
            <Comment.Metadata>
              <div>{inquiry.time}</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>{inquiry.text}</p>
            </Comment.Text>
            {/* <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions> */}
          </Comment.Content>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src="https://react.semantic-ui.comhttps://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
              <Comment.Content>
                <Comment.Author as="a">{answer.userName}</Comment.Author>
                <Comment.Metadata>
                  <div>{answer.time}</div>
                </Comment.Metadata>
                <Comment.Text>{answer.text}</Comment.Text>
                {/* <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions> */}
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment>
      </Comment.Group>
    </>
  );
};

export default QuestionItem;
