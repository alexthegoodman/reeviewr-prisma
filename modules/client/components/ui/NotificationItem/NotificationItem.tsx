import * as React from "react";

import { NotificationItemProps } from "./NotificationItem.d";

const NotificationItem: React.FC<NotificationItemProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default NotificationItem;
