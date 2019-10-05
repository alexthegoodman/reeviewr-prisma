import * as React from "react";

import { Text } from "@blueprintjs/core";
import { Link } from "react-navi";
import { NotificationItemProps } from "./NotificationItem.d";

const NotificationItem: React.FC<NotificationItemProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  notification = null
}) => {
  const clickHandler = e => onClick(e);
  return (
    <section className="notificationItem">
      <div className="notificationItemContain">
        <div className="visual">
          <img src="/public/img/mailchimp3-small.jpg" />
        </div>
        <div className="info">
          <Text className="message" tagName="span">
            {notification.itemName}
          </Text>
          <Link href="#!">View Review</Link>
        </div>
      </div>
    </section>
  );
};

export default NotificationItem;
