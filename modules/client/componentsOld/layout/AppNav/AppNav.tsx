import * as React from "react";

import { AppNavProps } from "./AppNav.d";

import {
  Link,
  NotFoundBoundary,
  useCurrentRoute,
  useLoadingRoute,
  useNavigation,
} from "react-navi";
// import BusyIndicator from "react-busy-indicator";

import { useAppContext } from "../../../context";

import { Button, Icon, Menu, Popover, Position, Text } from "@blueprintjs/core";
import * as $ from "jquery";
import { useCookies } from "react-cookie";
import Legacy from "../../../../services/Legacy";
import Utility from "../../../../services/Utility";
import Strings from "../../../services/Strings";
import BeyondSearchData from "../../data/BeyondSearchData/BeyondSearchData";
import ContentFooter from "../../ui/ContentFooter/ContentFooter";
import Header from "../../ui/Header/Header";
import MenuItem from "../../ui/MenuItem/MenuItem";
import ProfileItem from "../../ui/ProfileItem/ProfileItem";
import Sidebar from "../../ui/Sidebar/Sidebar";
import App from "../App/App";

const AppNav: React.FC<AppNavProps> = ({ children }) => {
  const utility = new Utility();
  const legacy = new Legacy();
  const strings = new Strings();

  const route = useCurrentRoute();
  const navigation = useNavigation();
  const [cookies, setCookie, removeCookie] = useCookies([
    "reeviewrId",
  ]);

  const [{ tour, userData }, dispatch] = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  console.info("cookies", cookies["reeviewrId"]);

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

  const openInNewTab = url => {
    const win = window.open(url, "_blank");
    win.focus();
  };

  let topLoggedInItems = <></>;
  let bottomLoggedInItems = <></>;
  const alwaysOnItems = (
    <>
      <MenuItem
        onClick={() =>
          openInNewTab("https://grandrapids.reeviewr.com/pages/about")
        }
      >
        About Reeviewr
      </MenuItem>
      <MenuItem
        onClick={() =>
          openInNewTab("https://grandrapids.reeviewr.com/pages/terms")
        }
      >
        Terms
      </MenuItem>
      <MenuItem
        onClick={() => openInNewTab("https://www.facebook.com/reeviewr/")}
      >
        Facebook
      </MenuItem>
      <MenuItem onClick={() => openInNewTab("https://twitter.com/reeviewr")}>
        Twitter
      </MenuItem>
    </>
  );

  let pointCounter = <></>;
  let loggedOutItems = (
    <>
      <MenuItem
        active={route.url.pathname === "/login" ? true : false}
        onClick={() => navigate("/login", true)}
      >
        Login
      </MenuItem>
      <MenuItem
        active={route.url.pathname === "/sign-up" ? true : false}
        onClick={() => navigate("/sign-up", true)}
      >
        Sign Up
      </MenuItem>
    </>
  );
  if (userData !== null && userData) {
    const userArtistName = legacy.extractMetaValue(
      userData.user.userMeta,
      "userArtistName"
    );

    const profileImage = legacy.extractMetaValue(
      userData.user.userMeta,
      "profileImage"
    );

    const logOut = () => {
      removeCookie("reeviewrId");
      // window.location.reload();
      window.location.href = window.location.origin;
    };

    const goToProfile = () => {
      console.info("userData", userData);
      const profileUrl = `/artists/${userData.user.id}/${strings.convertToSlug(
        userArtistName
      )}`;
      navigation.navigate(profileUrl);
    };

    const points = parseInt(
      legacy.extractMetaValue(userData.user.userMeta, "points")
    );

    if (points > 0) {
      pointCounter = (
        <Text className="pointCounter" tagName="em">
          You have {points} Points
        </Text>
      );
    } else {
      pointCounter = (
        <Text className="pointCounter" tagName="em">
          Review Music For Points
        </Text>
      );
    }

    rightNav = <></>;

    rightDropdown = (
      <ProfileItem
        className="headerItem"
        imageUrl={profileImage}
        name={userArtistName}
      />
    );
    topLoggedInItems = (
      <>
        <MenuItem onClick={goToProfile}>Profile</MenuItem>
      </>
    );
    bottomLoggedInItems = (
      <>
        <MenuItem>Settings</MenuItem>
        <MenuItem onClick={logOut}>Log Out</MenuItem>
      </>
    );
    loggedOutItems = <></>;
  }

  const navigate = (href, mobile = true, loginCheck = false) => {
    if (loginCheck) {
      if (userData !== null && userData) {
        navigation.navigate(href);
      } else {
        navigation.navigate("/sign-up");
      }
    } else {
      navigation.navigate(href);
    }

    if (mobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <App>
      <Sidebar
        className={mobileMenuOpen ? "mobileMenuOpen" : "mobileMenuClosed"}
      >
        <div className="mobileHide">
          {pointCounter}
          <Button
            className="uploadButton joyrideUploadPage"
            onClick={() => navigate("/upload", false, true)}
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
              className="joyrideTracksPage"
              active={route.url.pathname === "/tracks" ? true : false}
              onClick={() => navigation.navigate("/tracks")}
            >
              Tracks
            </MenuItem>
            <MenuItem
              className="joyrideArtistsPage"
              active={route.url.pathname === "/artists" ? true : false}
              onClick={() => navigation.navigate("/artists")}
            >
              Artists
            </MenuItem>
            <MenuItem
              className="joyrideReviewsPage"
              active={route.url.pathname === "/reviews" ? true : false}
              onClick={() => navigation.navigate("/reviews")}
            >
              Reviews
            </MenuItem>
            <MenuItem
              className="joyrideMessagesPage"
              active={route.url.pathname === "/messages" ? true : false}
              onClick={() => navigate("/messages", false, true)}
            >
              Messages
            </MenuItem>
            <MenuItem
              className="joyrideNotificationsPage"
              active={route.url.pathname === "/notifications" ? true : false}
              onClick={() => navigate("/notifications", false, true)}
            >
              Notifications
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
        </div>
        <div className="mobileShow overflowScroll">
          <Menu className="sidebarMenu">
            <MenuItem
              active={route.url.pathname === "/" ? true : false}
              onClick={() => navigate("/", true)}
            >
              Home
            </MenuItem>
            <MenuItem
              active={route.url.pathname === "/tracks" ? true : false}
              onClick={() => navigate("/tracks", true)}
            >
              Tracks
            </MenuItem>
            <MenuItem
              active={route.url.pathname === "/artists" ? true : false}
              onClick={() => navigate("/artists", true)}
            >
              Artists
            </MenuItem>
            <MenuItem
              active={route.url.pathname === "/reviews" ? true : false}
              onClick={() => navigate("/reviews", true)}
            >
              Reviews
            </MenuItem>
            <MenuItem
              active={route.url.pathname === "/upload" ? true : false}
              onClick={() => navigate("/upload", true, true)}
            >
              Upload
            </MenuItem>
            {topLoggedInItems}
            {alwaysOnItems}
            {bottomLoggedInItems}
            {loggedOutItems}
          </Menu>
        </div>
      </Sidebar>
      <Header
        leftElements={
          <>
            <section className="logoContainer">
              <Link href="/">
                <img className="logo" src="/public/img/logo-w.png" />
              </Link>
            </section>
            <div className="mobileHide w100">
              <BeyondSearchData />
            </div>
          </>
        }
        rightElements={
          <>
            <div className="mobileHide">
              <Button
                className="actionButton headerItem"
                minimal={true}
                onClick={async () => {
                  await navigation.navigate("/");
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
                    {topLoggedInItems}
                    {alwaysOnItems}
                    {bottomLoggedInItems}
                  </Menu>
                }
                position={Position.BOTTOM_LEFT}
              >
                {rightDropdown}
              </Popover>
            </div>

            <div className="mobileShow">
              <Button
                className="actionButton headerItem hamburgerItem"
                minimal={true}
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
              >
                <Icon icon="menu" />
              </Button>
            </div>
          </>
        }
      />

      <section className="mainContent">
        <div className="contentBody">{children}</div>

        <ContentFooter />
      </section>
    </App>
  );
};

export default AppNav;
