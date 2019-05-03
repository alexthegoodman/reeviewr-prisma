import * as React from "react";

import { ProfileSidebarProps } from "./ProfileSidebar.d";
import Sidebar from "../Sidebar/Sidebar";
import { Text } from "@blueprintjs/core";
import Legacy from "../../../../services/Legacy";

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  userData = null,
}) => {
  const legacy = new Legacy();

  const clickHandler = e => onClick(e);

  const firstName = legacy.extractMetaValue(
    userData.user.userMeta,
    "firstName"
  );
  const lastName = legacy.extractMetaValue(userData.user.userMeta, "lastName");
  const userArtistName = legacy.extractMetaValue(
    userData.user.userMeta,
    "userArtistName"
  );

  return (
    <Sidebar type="sub">
      {/* ArtistImage */}
      <Text tagName="h1" className="sidebarHeadline">
        {userArtistName}
      </Text>
      <Text
        tagName="h2"
        className="sidebarMeta"
      >{`${firstName} ${lastName}`}</Text>
      <Text tagName="h3" className="sidebarMeta">
        {userData.user.userEmail}
      </Text>
      {/* Bio */}
      {/* ArtistSocialMedia */}
    </Sidebar>
  );
};

export default ProfileSidebar;
