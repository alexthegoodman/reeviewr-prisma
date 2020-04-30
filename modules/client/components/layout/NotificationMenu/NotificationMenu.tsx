import * as React from "react";

import { Button } from "@blueprintjs/core";
import NotificationItem from "../../notifications/NotificationItem/NotificationItem";
import { NotificationMenuProps } from "./NotificationMenu.d";
import { useAppContext } from "../../../context";
import { useNavigation } from "react-navi";

const NotificationMenu: React.FC<NotificationMenuProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  notificationsData = null,
}) => {
  const clickHandler = (e) => onClick(e);
  const navigation = useNavigation();

  return (
    <section className="notificationMenu">
      <div className="notificationMenuContain">
        {typeof notificationsData !== "undefined" &&
        notificationsData !== null ? (
          notificationsData.findManyNotification.map((notification, i) => {
            return <NotificationItem key={i} notification={notification} />;
          })
        ) : (
          <></>
        )}
        <Button
          className="dropdownMenuButton"
          onClick={() => navigation.navigate("/notifications/")}
        >
          View all Notifications
        </Button>
      </div>
    </section>
  );
};

export default NotificationMenu;
