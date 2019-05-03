import * as React from "react";

import { ProfileFollowersProps } from "./ProfileFollowers.d";
import ProfileNav from "../../layout/ProfileNav/ProfileNav";

const ProfileFollowers: React.FC<ProfileFollowersProps> = () => {
  return (
    <ProfileNav>
      <h1>Followers</h1>
    </ProfileNav>
  );
};

export default ProfileFollowers;
