import * as React from "react";

import { Button, Icon, Text } from "@blueprintjs/core";
import { ProfileItemProps } from "./ProfileItem.d";
import Hawaii from "../../../services/Hawaii";
import Oahu from "../../../../services/Oahu";

const ProfileItem: React.FC<ProfileItemProps> = ({
  ref = null,
  className = "",
  onClick = () => console.info("Click"),
  userData = null,
}) => {
  const hawaii = new Hawaii();
  const oahu = new Oahu();
  const clickHandler = e => onClick(e);

  // console.info("profile item data", userData);

  let imageUrl = "";
  let points = parseInt(
    oahu.legacy.extractMetaValue(userData.userMeta, "points")
  );
  // let profileFilename = parseInt(oahu.legacy.extractMetaValue(userData.userMeta, "profileFilename"));

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
          <Text className="nameLabel">{userData.userEmail}</Text>
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
