import * as React from "react";

import { Icon, Text, Popover, Button, Position, Menu } from "@blueprintjs/core";
import { Link } from "react-navi";
import Core from "../../../../services/Core";
import Legacy from "../../../../services/Legacy";
import { MiniPostCardProps } from "./MiniPostCard.d";
import MenuItem from "../../navigation/MenuItem/MenuItem";
import Hawaii from "../../../services/Hawaii";
import Oahu from "../../../../services/Oahu";
import { DELETE_POST } from "../../../graphql/mutations/post";
import PostCtrls from "../PostCtrls/PostCtrls";

const MiniPostCard: React.FC<MiniPostCardProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  post = null,
}) => {
  const hawaii = new Hawaii();
  const oahu = new Oahu();

  const filename = oahu.legacy.extractMetaValue(
    post.itemMeta,
    "contentFilename"
  );
  const imageUrl = oahu.core.imagePath("reeviewr-spaces", filename, {
    resize: {
      width: 200,
      height: 200,
      fit: "fill",
    },
  });

  return (
    <section className="miniPostCard">
      <div className="miniPostCardContain">
        <div className="visual">
          <img src={imageUrl} alt={post.itemName} title={post.itemName} />
        </div>
        <div className="info">
          <div className="infoContent">
            <Text className="miniPostCardTitle" tagName="span">
              {post.itemName}
            </Text>
            <Link
              className="miniPostCardLink"
              href={`/posts/${post.id}/${post.itemUrlSegment}`}
            >
              View Post
            </Link>
          </div>
          <div className="infoCtrls">
            <Popover
              content={<PostCtrls post={post} />}
              position={Position.BOTTOM_LEFT}
            >
              <Button
                className="cardCtrl"
                minimal={true}
                onClick={async () => {}}
                icon="chevron-down"
              />
            </Popover>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniPostCard;
