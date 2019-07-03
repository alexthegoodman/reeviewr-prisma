import * as React from "react";

import { MessengerHistoryProps } from "./MessengerHistory.d";

const MessengerHistory: React.FC<MessengerHistoryProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default MessengerHistory;
