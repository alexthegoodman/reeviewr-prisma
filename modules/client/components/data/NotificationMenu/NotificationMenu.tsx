import * as React from "react";

import { NotificationMenuProps } from "./NotificationMenu.d";

const NotificationMenu: React.FC<NotificationMenuProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default NotificationMenu;
