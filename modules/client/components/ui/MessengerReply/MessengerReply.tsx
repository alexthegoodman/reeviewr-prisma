import * as React from "react";

import { MessengerReplyProps } from "./MessengerReply.d";

const MessengerReply: React.FC<MessengerReplyProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default MessengerReply;
