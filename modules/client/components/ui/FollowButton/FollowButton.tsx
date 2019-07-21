import * as React from "react";

import { FollowButtonProps } from "./FollowButton.d";

const FollowButton: React.FC<FollowButtonProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <>
      <a href="#!">Follow</a>
    </>
  );
};

export default FollowButton;
