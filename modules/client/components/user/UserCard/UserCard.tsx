import * as React from "react";

import { Icon, Text } from "@blueprintjs/core";
import FollowButton from "../../actions/FollowButton/FollowButton";
import MessageButton from "../../actions/MessageButton/MessageButton";
import { UserCardProps } from "./UserCard.d";
import Oahu from "../../../../services/Oahu";
import Hawaii from "../../../services/Hawaii";
import LoadingIndicator from "../../system/LoadingIndicator/LoadingIndicator";

const UserCard: React.FC<UserCardProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  user = null,
}) => {
  const oahu = new Oahu();
  const hawaii = new Hawaii();

  if (!oahu.utility.isDefinedWithContent(user)) {
    return (
      <>
        <LoadingIndicator />
      </>
    );
  }

  const firstName = oahu.dataHandler.extractMetaValue(
    user.userMeta,
    "firstName"
  );
  const lastName = oahu.dataHandler.extractMetaValue(user.userMeta, "lastName");
  const numOfPosts = user.posts.length;

  return (
    <section className="userCard">
      <div className="userCardContain">
        <div className="visual">
          <img src="/public/img/mailchimp4-small.jpg" alt="" title="" />
        </div>
        <div className="info">
          <Text className="userName" tagName="span">
            {firstName} {lastName}
          </Text>
          <div className="userCardStats">
            <div className="stat">
              <Icon icon="manually-entered-data" />
              <Text tagName="span">{numOfPosts} Posts</Text>
            </div>
          </div>
          <div className="infoInteractions">
            <FollowButton />
            <MessageButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserCard;
