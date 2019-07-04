import * as React from "react";

import { MessengerReplyProps } from "./MessengerReply.d";
import Utility from "../../../../services/Utility";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { Button } from "@blueprintjs/core";
import { useAppContext } from "../../../context";

const MessengerReply: React.FC<MessengerReplyProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  send = () => console.info("Send"),
  sendDisabled = true,
  selectedUser = null,
}) => {
  const utility = new Utility();

  const [{ userData }, dispatch] = useAppContext();
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
        <Button
          className="actionButton"
          onClick={() =>
            send(
              null,
              [userData.user.id, selectedUser.id],
              editorState.getCurrentContent().getPlainText()
            )
          }
          disabled={sendDisabled}
        >
          Send Message
        </Button>
      </>
    );
  } else {
    return <>Loading editor...</>;
  }
};

export default MessengerReply;
