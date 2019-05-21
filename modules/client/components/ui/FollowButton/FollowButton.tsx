import * as React from "react";

import { FollowButtonProps } from "./FollowButton.d";
import { Button, Text, Icon } from "@blueprintjs/core";
import Legacy from "../../../../services/Legacy";
import Utility from "../../../../services/Utility";
import Core from "../../../../services/Core";
import { useAppContext } from "../../../context";

const FollowButton: React.FC<FollowButtonProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const legacy = new Legacy();
  const utility = new Utility();
  const core = new Core();

  const [{ userData }, dispatch] = useAppContext();

  const clickHandler = e => onClick(e);

  let followers = null;
  if (utility.isDefinedWithContent(userData.user)) {
    let savedFollowers = legacy.extractMetaValue(
      userData.user.userMeta,
      "followers"
    );
    followers = core.getFromCSV(savedFollowers);
    // console.info("follow button followers", userData.user.oldId, followers);
  }

  return (
    <Button
      ref={ref}
      className={`trackButton followButton ${className}`}
      onClick={clickHandler}
    >
      <Text tagName="span">
        <Icon icon="new-person" />
        Follow
      </Text>
    </Button>
  );
};

export default FollowButton;
