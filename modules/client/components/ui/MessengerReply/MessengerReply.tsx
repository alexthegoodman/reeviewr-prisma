import * as React from "react";

import { MessengerReplyProps } from "./MessengerReply.d";
import Utility from "../../../../services/Utility";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { Button } from "@blueprintjs/core";

const MessengerReply: React.FC<MessengerReplyProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  send = () => console.info("Send"),
  sendDisabled = true,
}) => {
  const utility = new Utility();

  const clickHandler = e => onClick(e);

  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  if (utility.isDefinedWithContent(document)) {
    // this editor has support for Mentions and Hashtags if needed
    return (
      <>
        <Editor
          editorState={editorState}
          toolbarClassName="draftToolbar replyToolbar"
          wrapperClassName="draftWrapper replyWrapper"
          editorClassName="draftEditor replyEditor"
          onEditorStateChange={setEditorState}
          toolbar={{
            options: [], // try ["inline"]
          }}
        />
        <Button className="actionButton" onClick={send} disabled={sendDisabled}>
          Send Message
        </Button>
      </>
    );
  } else {
    return <>Loading editor...</>;
  }
};

export default MessengerReply;
