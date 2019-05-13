import * as React from "react";

import { AppNavProps } from "./AppNav.d";

import {
  useCurrentRoute,
  useLoadingRoute,
  NotFoundBoundary,
  useNavigation,
  Link,
} from "react-navi";
// import BusyIndicator from "react-busy-indicator";

import { useAppContext } from "../../../context";

import Header from "../../ui/Header/Header";
import Sidebar from "../../ui/Sidebar/Sidebar";
import MenuItem from "../../ui/MenuItem/MenuItem";
import { Menu, Button, Popover, Position, Text, Icon } from "@blueprintjs/core";
import ProfileItem from "../../ui/ProfileItem/ProfileItem";
import BeyondSearch from "../../ui/BeyondSearch/BeyondSearch";
import App from "../App/App";
import { useCookies } from "react-cookie";
import Utility from "../../../../services/Utility";
import { USER_QUERY } from "../../../graphql/queries/user";
import { useQuery } from "react-apollo-hooks";
import Legacy from "../../../../services/Legacy";
import BeyondSearchData from "../../data/BeyondSearchData/BeyondSearchData";
import * as $ from "jquery";

const AppNav: React.FC<AppNavProps> = ({ children }) => {
  const utility = new Utility();
  const legacy = new Legacy();

  const route = useCurrentRoute();
  const navigation = useNavigation();
  const [cookies, setCookie, removeCookie] = useCookies([
    "reeviewrPrivateHash",
  ]);

  const [{ tour, userData }, dispatch] = useAppContext();

  console.info("cookies", cookies["reeviewrPrivateHash"]);

  let rightNav = (
    <>
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
    </>
  );
  let rightDropdown = (
    <Button
      className="textButton headerItem"
      minimal={true}
      rightIcon="caret-down"
    >
      More
      {/** Terms, Blog, Social Media, About Us / Story, Contact Us, etc */}
    </Button>
  );
  let dropdownMenuItems = <></>;

  let pointCounter = <></>;
  if (userData !== null) {
    const logOut = () => {
      removeCookie("reeviewrPrivateHash");
      window.location.reload();
    };

    const userArtistName = legacy.extractMetaValue(
      userData.user.userMeta,
      "userArtistName"
    );

    const profileImage = legacy.extractMetaValue(
      userData.user.userMeta,
      "profileImage"
    );

    const points = legacy.extractMetaValue(userData.user.userMeta, "points");

    pointCounter = (
      <Text className="pointCounter" tagName="em">
        You have {points} Points
      </Text>
    );

    rightNav = <></>;
    rightDropdown = (
      <ProfileItem
        className="headerItem"
        imageUrl={profileImage}
        name={userArtistName}
      />
    );
    dropdownMenuItems = (
      <>
        <MenuItem>Settings</MenuItem>
        <MenuItem onClick={logOut}>Log Out</MenuItem>
      </>
    );
  }

  return (
    <App>
      <Sidebar>
        {pointCounter}
        <Button
          className="uploadButton"
          onClick={() => navigation.navigate("/upload")}
        >
          Upload
        </Button>
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
        <footer className="footer">
          <Text tagName="span">
            <img src="https://img.shields.io/chrome-web-store/price/ogffaloegjglncjfehdfplabnoondfjo.svg" />
            All Proceeds Donated
          </Text>
          <Text tagName="span">
            <img src="https://img.shields.io/apm/l/vim-mode.svg" />
            Reeviewr is Open Source
          </Text>
          <a target="_blank" href="https://www.facebook.com/reeviewr/">
            <img src="https://img.shields.io/badge/-Facebook-%23306199.svg" />
          </a>
          <a target="_blank" href="https://twitter.com/reeviewr">
            <img src="https://img.shields.io/badge/-Twitter-%2326c4f1.svg" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCgHw8sLLekekCr_LjWZs9Cg"
          >
            <img src="https://img.shields.io/badge/-YouTube-%23e21d17.svg" />
          </a>
        </footer>
      </Sidebar>
      <Header
        leftElements={
          <>
            <section className="logoContainer">
              <Link href="/">
                <img className="logo" src="/public/img/logo-w.png" />
              </Link>
            </section>
            <BeyondSearchData />
          </>
        }
        rightElements={
          <>
            <Button
              className="actionButton headerItem"
              minimal={true}
              onClick={() => {
                dispatch({
                  type: "setTour",
                  tour: { run: true },
                });
                setTimeout(() => {
                  $(".react-joyride__beacon").trigger("click");
                }, 250);
              }}
            >
              How it Works
            </Button>
            {rightNav}
            <Popover
              content={
                <Menu className="dropdown">
                  {/* <MenuItem>Help</MenuItem> */}
                  <MenuItem>About Reeviewr</MenuItem>
                  <MenuItem>Terms</MenuItem>
                  <MenuItem>Facebook</MenuItem>
                  <MenuItem>Twitter</MenuItem>
                  {dropdownMenuItems}
                </Menu>
              }
              position={Position.BOTTOM_LEFT}
            >
              {rightDropdown}
            </Popover>
          </>
        }
      />

      <section className="mainContent">{children}</section>
    </App>
  );
};

export default AppNav;
