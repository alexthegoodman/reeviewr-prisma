import * as React from "react";

import { Text } from "@blueprintjs/core";
import { Link } from "react-navi";
import FollowUser from "../../ui/FollowUser/FollowUser";
import { WhoToFollowProps } from "./WhoToFollow.d";

const WhoToFollow: React.FC<WhoToFollowProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <>
      <section className="whoToFollow">
        <div className="whoToFollowContain">
          <Text className="whoToFollowTitle" tagName="span">
            Who to Follow
          </Text>
          <FollowUser
            image="/public/img/mailchimp1-small.jpg"
            name="Tom Hanks"
            userId=""
          />
          <FollowUser
            image="/public/img/mailchimp1-small.jpg"
            name="Tom Hanks"
            userId=""
          />
          <FollowUser
            image="/public/img/mailchimp1-small.jpg"
            name="Tom Hanks"
            userId=""
          />
          <FollowUser
            image="/public/img/mailchimp1-small.jpg"
            name="Tom Hanks"
            userId=""
          />
          <Link className="morePeople" href="/find-people/">
            More People
          </Link>
        </div>
      </section>
    </>
  );
};

export default WhoToFollow;
