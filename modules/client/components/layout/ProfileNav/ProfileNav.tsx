import * as React from "react";

import { ProfileNavProps } from "./ProfileNav.d";
import Sidebar from "../../ui/Sidebar/Sidebar";
import { Button, Menu, Text } from "@blueprintjs/core";
import MenuItem from "../../ui/MenuItem/MenuItem";
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";
import { useQuery } from "@apollo/react-hooks";
import { USER_QUERY } from "../../../graphql/queries/user";
import Utility from "../../../../services/Utility";
import ProfileTabs from "../../ui/ProfileTabs/ProfileTabs";
import ProfileSidebar from "../../ui/ProfileSidebar/ProfileSidebar";

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
