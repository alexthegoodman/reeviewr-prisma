import * as React from "react";

import { ProfileFollowingProps } from "./ProfileFollowing.d";
import ProfileNav from "../../layout/ProfileNav/ProfileNav";

const ProfileFollowing: React.FC<ProfileFollowingProps> = () => {
  return (
    <ProfileNav>
      <h1>Following</h1>
    </ProfileNav>
  );
};

export default ProfileFollowing;
