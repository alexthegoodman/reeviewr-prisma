import * as React from "react";

import { Text } from "@blueprintjs/core";
import { Link } from "react-navi";
import { NotificationItemProps } from "./NotificationItem.d";
import Legacy from "../../../../services/Legacy";
import { NOTIFICATION_CODE } from "../../../../services/NOTIFICATION_CODE";

const NotificationItem: React.FC<NotificationItemProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  notification = null
}) => {
  const legacy = new Legacy();
  const clickHandler = e => onClick(e);
  console.info("notification details", notification);

  const senderFirstName = legacy.extractMetaValue(notification.sender.userMeta, "firstName");
  const senderLastName = legacy.extractMetaValue(notification.sender.userMeta, "lastName");

  let content = <></>;
  let contentLink = null;
  if (notification.itemName === NOTIFICATION_CODE.A001) {
    contentLink = `/post/${notification.post.id}`;
    content = (
      <>
        <Link href={`/user/${notification.sender.id}`}>
          {senderFirstName} {senderLastName}
        </Link>
        <Text>has reviewed</Text>
        <Link href={contentLink}>
          {notification.post.itemName}
        </Link>
      </>
    )
  }

  return (
    <section className="notificationItem">
      <div className="notificationItemContain">
        <div className="visual">
          <img src="/public/img/mailchimp3-small.jpg" />
        </div>
        <div className="info">
          {content}
          <Link href={contentLink}>View Review</Link>
        </div>
      </div>
    </section>
  );
};

export default NotificationItem;
