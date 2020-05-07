import * as React from "react";

import {
  Button,
  Icon,
  Position,
  Text,
  Tooltip,
  Popover,
  Menu,
} from "@blueprintjs/core";
import JoinButton from "../../actions/JoinButton/JoinButton";
import MiniPostCard from "../../post/MiniPostCard/MiniPostCard";
import { SpaceCardProps } from "./SpaceCard.d";
import MenuItem from "../../navigation/MenuItem/MenuItem";
import { Link } from "react-navi";
import Hawaii from "../../../services/Hawaii";

const SpaceCard: React.FC<SpaceCardProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  space = null,
}) => {
  const hawaii = new Hawaii();
  const spaceUrl = hawaii.stringHandler.getSpaceUrl(space);

  return (
    <section className="spaceCard">
      <div className="spaceCardContain">
        <div className="spaceCardHeader">
          <Link className="spaceCardHeadline" href={spaceUrl}>
            {space.itemName}!
          </Link>
          <div className="spaceCtrls">
            <JoinButton spaceId={space.id} spaceMembers={space.members} />
            <Popover
              content={
                <Menu className="dropdown">
                  <MenuItem>Report</MenuItem>
                  <MenuItem>Edit</MenuItem>
                  <MenuItem>Delete</MenuItem>
                </Menu>
              }
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
        <div className="spaceCardStats">
          <Tooltip content="50 Reviews" position={Position.BOTTOM}>
            <div className="stat">
              <Icon icon="comment" />
              <Text tagName="span">0</Text>
            </div>
          </Tooltip>
          <Tooltip content="12 Annotations" position={Position.BOTTOM}>
            <div className="stat">
              <Icon icon="highlight" />
              <Text tagName="span">0</Text>
            </div>
          </Tooltip>
          <Tooltip content="25 Questions" position={Position.BOTTOM}>
            <div className="stat">
              <Icon icon="help" />
              <Text tagName="span">0</Text>
            </div>
          </Tooltip>
        </div>
        <div className="spaceCardContent">
          {space.posts !== null ? (
            space.posts.map((post) => {
              return <MiniPostCard key={post.id} post={post} />;
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpaceCard;
