import * as React from "react";

import { Button, Icon, Text } from "@blueprintjs/core";
import { ProfileItemProps } from "./ProfileItem.d";

const ProfileItem: React.FC<ProfileItemProps> = ({
  ref = null,
  className = "",
  onClick = () => console.info("Click"),
  imageUrl = "",
  name = "",
  points = 0,
}) => {
  const clickHandler = e => onClick(e);

  let pointLabel = points > 1 ? `${points} Points` : `${points} Point`;

  if (points === 0) {
    pointLabel = "Start earning points!";
  }

  return (
    <Button
      ref={ref}
      className={`profileItem ${className}`}
      onClick={clickHandler}
    >
      <div className="visual">
        <img src={imageUrl} />
      </div>
      <div className="info">
        <Text className="name" tagName="span">
          {name}
          <Icon icon="chevron-down" />
        </Text>
        <Text className="points" tagName="span">
          {pointLabel}
        </Text>
      </div>
    </Button>
  );
};

export default ProfileItem;
