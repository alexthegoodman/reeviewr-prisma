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
import JoinButton from "../JoinButton/JoinButton";
import MiniPostCard from "../MiniPostCard/MiniPostCard";
import { PodCardProps } from "./PodCard.d";
import MenuItem from "../MenuItem/MenuItem";

const PodCard: React.FC<PodCardProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  pod = null,
}) => {
  return (
    <section className="podCard">
      <div className="podCardContain">
        <div className="podCardHeader">
          <Text className="podCardHeadline" tagName="span">
            {pod.itemName}
          </Text>
          <div className="podCtrls">
            <JoinButton podId={pod.id} podMembers={pod.members} />
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
        <div className="podCardStats">
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
        <div className="podCardContent">
          {pod.livePosts !== null ? (
            pod.livePosts.map(post => {
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

export default PodCard;
