import * as React from "react";

import { ShareButtonProps } from "./ShareButton.d";
import { Button, Text, Icon } from "@blueprintjs/core";

const ShareButton: React.FC<ShareButtonProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <Button
      ref={ref}
      className={`trackButton shareButton ${className}`}
      onClick={clickHandler}
    >
      <Text tagName="span">
        <Icon icon="share" />Share
      </Text>
    </Button>
  );
};

export default ShareButton;
