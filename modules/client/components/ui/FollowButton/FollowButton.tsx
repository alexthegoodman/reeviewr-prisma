import * as React from "react";

import { Icon } from "@blueprintjs/core";
import { FollowButtonProps } from "./FollowButton.d";

const FollowButton: React.FC<FollowButtonProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <>
      <a className="followButton" href="#!">
        <Icon icon="plus" />
        Follow
      </a>
    </>
  );
};

export default FollowButton;
