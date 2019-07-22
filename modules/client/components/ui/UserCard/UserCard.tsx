import * as React from "react";

import { Icon, Text } from "@blueprintjs/core";
import FollowButton from "../FollowButton/FollowButton";
import { UserCardProps } from "./UserCard.d";

const UserCard: React.FC<UserCardProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <section className="userCard">
      <div className="userCardContain">
        <div className="visual">
          <img src="/public/img/mailchimp4-small.jpg" alt="" title="" />
        </div>
        <div className="info">
          <Text className="userName" tagName="span">
            Larry Tomwell
          </Text>
          <div className="userCardStats">
            <div className="stat">
              <Icon icon="manually-entered-data" />
              <Text tagName="span">9 Posts</Text>
            </div>
          </div>
          <FollowButton />
        </div>
      </div>
    </section>
  );
};

export default UserCard;
