import * as React from "react";

import { Button } from "@blueprintjs/core";
import NotificationItem from "../../ui/NotificationItem/NotificationItem";
import { NotificationMenuProps } from "./NotificationMenu.d";
import { useAppContext } from "../../../context";

const NotificationMenu: React.FC<NotificationMenuProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  notificationsData = null
}) => {
  const clickHandler = e => onClick(e);

  console.info("notificationsData", notificationsData);

  return (
    <section className="notificationMenu">
      <div className="notificationMenuContain">
        {notificationsData.findManyNotification.map((notification, i) => {
          return <NotificationItem key={i} notification={notification} />
        })}
        <Button className="allNotificationsButton">
          View all Notifications
        </Button>
      </div>
    </section>
  );
};

export default NotificationMenu;
