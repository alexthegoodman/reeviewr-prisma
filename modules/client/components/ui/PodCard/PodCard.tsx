import * as React from "react";

import { Button, Icon, Position, Text, Tooltip } from "@blueprintjs/core";
import MiniPostCard from "../MiniPostCard/MiniPostCard";
import { PodCardProps } from "./PodCard.d";

const PodCard: React.FC<PodCardProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <section className="podCard">
      <div className="podCardContain">
        <div className="podCardHeader">
          <Text className="podCardHeadline" tagName="span">
            Hip Hop
          </Text>
          <Button className="joinButton">Join</Button>
        </div>
        <div className="podCardStats">
          <Tooltip content="50 Reviews" position={Position.BOTTOM}>
            <div className="stat">
              <Icon icon="comment" />
              <Text tagName="span">50</Text>
            </div>
          </Tooltip>
          <Tooltip content="12 Annotations" position={Position.BOTTOM}>
            <div className="stat">
              <Icon icon="highlight" />
              <Text tagName="span">12</Text>
            </div>
          </Tooltip>
          <Tooltip content="25 Questions" position={Position.BOTTOM}>
            <div className="stat">
              <Icon icon="help" />
              <Text tagName="span">25</Text>
            </div>
          </Tooltip>
        </div>
        <div className="podCardContent">
          <MiniPostCard />
          <MiniPostCard />
        </div>
      </div>
    </section>
  );
};

export default PodCard;
