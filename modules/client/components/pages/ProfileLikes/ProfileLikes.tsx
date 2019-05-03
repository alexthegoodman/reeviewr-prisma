import * as React from "react";

import { ProfileLikesProps } from "./ProfileLikes.d";
import ProfileNav from "../../layout/ProfileNav/ProfileNav";

const ProfileLikes: React.FC<ProfileLikesProps> = () => {
  return (
    <ProfileNav>
      <h1>Likes</h1>
    </ProfileNav>
  );
};

export default ProfileLikes;
