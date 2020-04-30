import * as React from "react";

import { ProfileNavProps } from "./ProfileNav.d";
import Utility from "../../../../services/Utility";
import ProfileTabs from "../../navigation/ProfileTabs/ProfileTabs";
import ProfileSidebar from "../../navigation/ProfileSidebar/ProfileSidebar";

const ProfileNav: React.FC<ProfileNavProps> = ({
  artistId,
  userData,
  children,
}) => {
  const utility = new Utility();

  return (
    <>
      <ProfileSidebar userData={userData} />
      <section className="subContent">
        {/* Hero */}
        <ProfileTabs />
        {children}
      </section>
    </>
  );
};

export default ProfileNav;
