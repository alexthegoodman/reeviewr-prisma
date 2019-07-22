import * as React from "react";

import { Icon, Text } from "@blueprintjs/core";
import { Link } from "react-navi";
import { MiniPostCardProps } from "./MiniPostCard.d";

const MiniPostCard: React.FC<MiniPostCardProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <section className="miniPostCard">
      <div className="miniPostCardContain">
        <div className="visual">
          <img src="" alt="" title="" />
        </div>
        <div className="info">
          <Text className="miniPostCardTitle" tagName="span">
            Can't Tell Me Nothin
          </Text>
          {/* <div className="miniPostCardStats">
            <div className="stat">
              <Icon icon="help" />
              <Text tagName="span">5</Text>
            </div>
            <div className="stat">
              <Icon icon="comment" />
              <Text tagName="span">7</Text>
            </div>
            <div className="stat">
              <Icon icon="highlight" />
              <Text tagName="span">3</Text>
            </div>
          </div> */}
          <Link className="miniPostCardLink" href="post">
            View Post
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MiniPostCard;
