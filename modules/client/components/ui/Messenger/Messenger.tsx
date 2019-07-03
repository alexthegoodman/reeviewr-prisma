import * as React from "react";

import { MessengerProps } from "./Messenger.d";

const Messenger: React.FC<MessengerProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default Messenger;
