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

  return (
    <App>
      <Sidebar>
        <Button className="uploadButton">Upload</Button>
        <Menu className="sidebarMenu">
          <MenuItem active={true}>Home</MenuItem>
          <MenuItem>Tracks</MenuItem>
          <MenuItem>Artists</MenuItem>
          <MenuItem>Reviews</MenuItem>
        </Menu>
      </Sidebar>
      <Header
        leftElements={
          <>
            {/* <ProfileItem
              className="headerItem"
              imageUrl="https://via.placeholder.com/100"
              name="Regina Spektor"
            /> */}
            <section className="loggedOutActions">
              <Button className="textButton headerItem" minimal={true}>
                Log In
              </Button>
              <Button className="textButton headerItem" minimal={true}>
                Sign Up
              </Button>
            </section>
            <BeyondSearch placeholder="Search tracks, artists, and reviews..." />
          </>
        }
        rightElements={
          <>
            <Button className="textButton headerItem" minimal={true}>
              How it Works
            </Button>
            <Button
              className="textButton headerItem"
              minimal={true}
              rightIcon="caret-down"
            >
              More
              {/** Terms, Blog, Social Media, About Us / Story, Contact Us, etc */}
            </Button>
          </>
        }
      />
      <section className="mainContent">{children}</section>
    </App>
  );
};

export default AppNav;
