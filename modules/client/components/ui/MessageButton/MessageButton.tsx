import * as React from "react";

import { Icon } from "@blueprintjs/core";
import { MessageButtonProps } from "./MessageButton.d";

const MessageButton: React.FC<MessageButtonProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <>
      <a className="messageButton" href="#!">
        <Icon icon="envelope" />
        Message
      </a>
    </>
  );
};

export default MessageButton;
