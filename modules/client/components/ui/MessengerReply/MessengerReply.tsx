import * as React from "react";

import { MessengerReplyProps } from "./MessengerReply.d";
import Utility from "../../../../services/Utility";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

const MessengerReply: React.FC<MessengerReplyProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const utility = new Utility();

  const clickHandler = e => onClick(e);

  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  if (utility.isDefinedWithContent(document)) {
    return (
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
      />
    );
  } else {
    return <>Loading editor...</>;
  }
};

export default MessengerReply;
