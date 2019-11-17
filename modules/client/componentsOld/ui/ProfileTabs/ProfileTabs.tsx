import * as React from "react";

import { ProfileTabsProps } from "./ProfileTabs.d";
import MenuItem from "../MenuItem/MenuItem";
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";

const ProfileTabs: React.FC<ProfileTabsProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);

  let route = useCurrentRoute();
  let loadingRoute = useLoadingRoute();
  let navigation = useNavigation();

  let pathParts = route.url.pathname.split("/");
  delete pathParts[4];
  let baseUrl = `${pathParts[0]}/${pathParts[1]}/${pathParts[2]}/${
    pathParts[3]
  }`;

  return (
    <div className="tabContainer">
      <ul className="tabs">
        <MenuItem
          className="tabItem"
          active={route.url.pathname === baseUrl ? true : false}
          onClick={() => navigation.navigate(baseUrl + "/")}
        >
          Tracks
        </MenuItem>
        <MenuItem
          className="tabItem"
          active={route.url.pathname === baseUrl + "/likes" ? true : false}
          onClick={() => navigation.navigate(baseUrl + "/likes")}
        >
          Likes
        </MenuItem>
        <MenuItem
          className="tabItem"
          active={route.url.pathname === baseUrl + "/followers" ? true : false}
          onClick={() => navigation.navigate(baseUrl + "/followers")}
        >
          Followers
        </MenuItem>
        <MenuItem
          className="tabItem"
          active={route.url.pathname === baseUrl + "/following" ? true : false}
          onClick={() => navigation.navigate(baseUrl + "/following")}
        >
          Following
        </MenuItem>
      </ul>
    </div>
  );
};

export default ProfileTabs;
