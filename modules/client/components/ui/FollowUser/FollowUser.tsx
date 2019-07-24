import * as React from "react";

import { Text } from "@blueprintjs/core";
import FollowButton from "../FollowButton/FollowButton";
import { FollowUserProps } from "./FollowUser.d";

const FollowUser: React.FC<FollowUserProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  size = "small",
  image = null,
  name = "",
  userId = null,
}) => {
  const clickHandler = e => onClick(e);

  const altText = `Follow ${name}`;

  return (
    <div className={`followUser ${size}`}>
      <div className="followUserContain">
        <div className="visual">
          <img src={image} alt={altText} title={altText} />
        </div>
        <div className="info">
          <Text tagName="span">{name}</Text>
          <FollowButton />
        </div>
      </div>
    </div>
  );
};

export default FollowUser;
