import * as React from "react";

import { ProfileItemProps } from "./ProfileItem.d";
import { Button, Text } from "@blueprintjs/core";

const ProfileItem: React.FC<ProfileItemProps> = ({
  ref = null,
  className = "",
  onClick = null,
  imageUrl = "",
  name = "",
}) => {
  const clickHandler = e => onClick(e);
  return (
    <Button
      ref={ref}
      className={`profileItem ${className}`}
      onClick={clickHandler}
    >
      <img src={imageUrl} />
      <Text tagName="span">{name}</Text>
    </Button>
  );
};

export default ProfileItem;
