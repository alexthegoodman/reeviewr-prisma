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
import { Menu, Button, Popover, Position } from "@blueprintjs/core";
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
          <MenuItem
            active={route.url.pathname === "/" ? true : false}
            onClick={() => navigation.navigate("/")}
          >
            Home
          </MenuItem>
          <MenuItem
            active={route.url.pathname === "/tracks" ? true : false}
            onClick={() => navigation.navigate("/tracks")}
          >
            Tracks
          </MenuItem>
          <MenuItem
            active={route.url.pathname === "/artists" ? true : false}
            onClick={() => navigation.navigate("/artists")}
          >
            Artists
          </MenuItem>
          <MenuItem
            active={route.url.pathname === "/reviews" ? true : false}
            onClick={() => navigation.navigate("/reviews")}
          >
            Reviews
          </MenuItem>
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
              <img className="logo" src="/public/img/logo-w.png" />
            </section>
            <BeyondSearch placeholder="Search tracks, artists, and reviews..." />
          </>
        }
        rightElements={
          <>
            <Button
              className="textButton headerItem"
              minimal={true}
              onClick={() => console.info("start tour")}
            >
              How it Works
            </Button>
            <Button
              className="textButton headerItem"
              minimal={true}
              onClick={() => navigation.navigate("/login")}
            >
              Log In
            </Button>
            <Button
              className="textButton headerItem"
              minimal={true}
              onClick={() => navigation.navigate("/sign-up")}
            >
              Sign Up
            </Button>
            <Popover
              content={
                <Menu className="dropdown">
                  <MenuItem>Terms</MenuItem>
                  <MenuItem>About Reeviewr</MenuItem>
                  <MenuItem>Help</MenuItem>
                  <MenuItem>Facebook</MenuItem>
                  <MenuItem>Twitter</MenuItem>
                </Menu>
              }
              position={Position.BOTTOM_LEFT}
            >
              <Button
                className="textButton headerItem"
                minimal={true}
                rightIcon="caret-down"
              >
                More
                {/** Terms, Blog, Social Media, About Us / Story, Contact Us, etc */}
              </Button>
            </Popover>
          </>
        }
      />
      <section className="mainContent">{children}</section>
    </App>
  );
};

export default AppNav;
