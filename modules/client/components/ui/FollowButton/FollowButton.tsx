import * as React from "react";

import { FollowButtonProps } from "./FollowButton.d";
import { Button, Text } from "@blueprintjs/core";

const FollowButton: React.FC<FollowButtonProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <Button
      ref={ref}
      className={`trackButton followButton ${className}`}
      onClick={clickHandler}
    >
      <Text tagName="span">Follow</Text>
    </Button>
  );
};

export default FollowButton;
