import * as React from "react";

import { Button } from "@blueprintjs/core";
import NotificationItem from "../../ui/NotificationItem/NotificationItem";
import { NotificationMenuProps } from "./NotificationMenu.d";

const NotificationMenu: React.FC<NotificationMenuProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <section className="notificationMenu">
      <div className="notificationMenuContain">
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <Button className="allNotificationsButton">
          View all Notifications
        </Button>
      </div>
    </section>
  );
};

export default NotificationMenu;
