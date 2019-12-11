import * as React from "react";

import { Button, Icon, Menu, Popover, Position, Text } from "@blueprintjs/core";
import { Link } from "react-navi";
import MenuItem from "../MenuItem/MenuItem";
import { PostCardProps } from "./PostCard.d";
import PostCtrls from "../PostCtrls/PostCtrls";

const PostCard: React.FC<PostCardProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  post = null,
}) => {
  const clickHandler = e => onClick(e);
  return (
    <section className="postCard">
      <div className="postCardContain">
        <div className="visual">
          <img src="" alt="" title="" />
        </div>
        <div className="info">
          <div className="infoHeader">
            <Text className="infoHeadline" tagName="span">
              {post.itemName}
            </Text>
            <Popover
              content={<PostCtrls post={post} />}
              position={Position.BOTTOM_LEFT}
            >
              <Button className="moreButton" icon="more" />
            </Popover>
          </div>
          <div className="infoInteractions">
            <Link href="#!">
              <Icon icon="comment" />
              Add Review
            </Link>
            <Link href="#!">
              <Icon icon="highlight" />
              Add Annotation
            </Link>
            <Link href="#!">
              <Icon icon="help" />
              Ask Question
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostCard;
