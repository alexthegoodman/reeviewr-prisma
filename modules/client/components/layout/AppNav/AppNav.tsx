import * as React from "react";

import { AppNavProps } from "./AppNav.d";

import { Link, useCurrentRoute, useNavigation } from "react-navi";

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
    "reeviewrPrivateHash",
  ]);

  const [{ tour, userData }, dispatch] = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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
      removeCookie("reeviewrPrivateHash");
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
      />
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
                ?
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
