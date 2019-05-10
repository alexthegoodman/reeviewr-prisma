import * as React from "react";

import { LikeButtonProps } from "./LikeButton.d";
import { Button, Text, Icon } from "@blueprintjs/core";

const LikeButton: React.FC<LikeButtonProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <Button
      ref={ref}
      className={`trackButton likeButton ${className}`}
      onClick={clickHandler}
    >
      <Text tagName="span">
        <Icon icon="heart" />
        Like
      </Text>
    </Button>
  );
};

export default LikeButton;
