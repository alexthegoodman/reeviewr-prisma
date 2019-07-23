import * as React from "react";

import { MessageMenuProps } from "./MessageMenu.d";

const MessageMenu: React.FC<MessageMenuProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default MessageMenu;
