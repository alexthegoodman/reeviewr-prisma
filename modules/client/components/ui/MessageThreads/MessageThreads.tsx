import * as React from "react";

import { MessageThreadsProps } from "./MessageThreads.d";

const MessageThreads: React.FC<MessageThreadsProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default MessageThreads;
