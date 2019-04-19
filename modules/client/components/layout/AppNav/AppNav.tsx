import * as React from "react";

import { AppNavProps } from "./AppNav.d";

import {
  useCurrentRoute,
  useLoadingRoute,
  NotFoundBoundary,
  useNavigation,
} from "react-navi";
// import BusyIndicator from "react-busy-indicator";

import { useAppContext } from "../../../context";

import Header from "../../ui/Header/Header";
import Sidebar from "../../ui/Sidebar/Sidebar";
import MenuItem from "../../ui/MenuItem/MenuItem";
import { Menu, Button } from "@blueprintjs/core";
import ProfileItem from "../../ui/ProfileItem/ProfileItem";
import BeyondSearch from "../../ui/BeyondSearch/BeyondSearch";
import App from "../App/App";

const AppNav: React.FC<AppNavProps> = ({ children }) => {
  let route = useCurrentRoute();
  let loadingRoute = useLoadingRoute();
  let navigation = useNavigation();

  const [{ currentTrack }, dispatch] = useAppContext();

  console.info("current track", currentTrack);

  const toggleTrack = () => {
    dispatch({
      type: "setCurrentTrack",
      currentTrack: { playing: !currentTrack.playing },
    });
  };

  return (
    <App>
      <Sidebar>
        <Menu className="sidebarMenu">
          <MenuItem active={true}>Tracks</MenuItem>
          <MenuItem>Artists</MenuItem>
          <MenuItem>Reviews</MenuItem>
        </Menu>
      </Sidebar>
      <Header
        leftElements={
          <>
            <ProfileItem
              className="headerItem"
              imageUrl="https://via.placeholder.com/100"
              name="Regina Spektor"
            />
            <BeyondSearch placeholder="Search tracks, artists, and reviews..." />
          </>
        }
        rightElements={
          <>
            <Button className="textButton headerItem" minimal={true}>
              How it Works
            </Button>
            <Button className="textButton headerItem" minimal={true}>
              About Reeviewr
            </Button>
          </>
        }
      />
      <section
        style={{
          paddingLeft: 325,
          paddingRight: 25,
          paddingTop: 85,
          background: "#3E4B58",
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        {children}
      </section>
    </App>
  );
};

export default AppNav;
