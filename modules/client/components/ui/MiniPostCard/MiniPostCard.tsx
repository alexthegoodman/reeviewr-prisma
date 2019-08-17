import * as React from "react";

import { Icon, Text } from "@blueprintjs/core";
import { Link } from "react-navi";
import Core from "../../../../services/Core";
import Legacy from "../../../../services/Legacy";
import { MiniPostCardProps } from "./MiniPostCard.d";

const MiniPostCard: React.FC<MiniPostCardProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  post = null,
}) => {
  const legacy = new Legacy();
  const core = new Core();

  const filename = legacy.extractMetaValue(post.itemMeta, "contentFilename");
  const imageUrl = core.imagePath("reeviewr-pods", filename, {
    width: 100,
    height: 100,
  });

  console.info("mini post card", filename, imageUrl);

  return (
    <section className="miniPostCard">
      <div className="miniPostCardContain">
        <div className="visual">
          <img src={imageUrl} alt={post.itemName} title={post.itemName} />
        </div>
        <div className="info">
          <Text className="miniPostCardTitle" tagName="span">
            {post.itemName}
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
