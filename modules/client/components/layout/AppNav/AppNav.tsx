import * as React from "react";

import { AppNavProps } from "./AppNav.d";

import { Link, useCurrentRoute, useNavigation } from "react-navi";

import { useAppContext } from "../../../context";

import {
  Button,
  Icon,
  Menu,
  Popover,
  Position,
  Switch,
  Text,
} from "@blueprintjs/core";
import * as $ from "jquery";
import { useCookies } from "react-cookie";
import Legacy from "../../../../services/Legacy";
import Utility from "../../../../services/Utility";
import Strings from "../../../services/Strings";
import BeyondSearchData from "../../data/BeyondSearchData/BeyondSearchData";
import WhoToFollow from "../../data/WhoToFollow/WhoToFollow";
import Advertisement from "../../ui/Advertisement/Advertisement";
import ContentFooter from "../../ui/ContentFooter/ContentFooter";
import Header from "../../ui/Header/Header";
import Logo from "../../ui/Logo/Logo";
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
    "reeviewrDarkMode",
  ]);

  // const [{ tour, userData }, dispatch] = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(
    cookies["reeviewrDarkMode"] === "true" ? true : false
  );

  const openInNewTab = url => {
    const win = window.open(url, "_blank");
    win.focus();
  };

  const navigate = (href, loginCheck = false) => {
    if (loginCheck) {
      if (userData !== null && userData) {
        navigation.navigate(href);
      } else {
        navigation.navigate("/sign-up");
      }
    } else {
      navigation.navigate(href);
    }

    setMobileMenuOpen(false);
  };

  // ATTN: show/hide nav links individually rather than in groups

  return (
    <App>
      <main
        className={`appContainer ${
          cookies["reeviewrDarkMode"] === "true" ? "darkMode" : "lightMode"
        }`}
      >
        <Sidebar
          className={mobileMenuOpen ? "mobileMenuOpen" : "mobileMenuClosed"}
        >
          <Logo white={false} />
          <Button className="button createPostButton">Create Post</Button>
          <Menu className="sidebarMenu">
            <MenuItem
              active={route.url.pathname === "/" ? true : false}
              onClick={() => navigate("/")}
            >
              Your Feed
            </MenuItem>
            <MenuItem
              className="joyrideTracksPage"
              active={route.url.pathname === "/tracks" ? true : false}
              onClick={() => navigate("/tracks")}
            >
              Joined Pods
            </MenuItem>
            <MenuItem
              className="joyrideTracksPage"
              active={route.url.pathname === "/tracks" ? true : false}
              onClick={() => navigate("/tracks")}
            >
              Invite Friends
            </MenuItem>
          </Menu>
          <WhoToFollow />
          <Advertisement />
        </Sidebar>
        <Header
          leftElements={
            <>
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
                <Popover
                  content={
                    <Menu className="dropdown">
                      <Switch
                        label="Dark Mode"
                        defaultChecked={darkMode}
                        onChange={e => {
                          setDarkMode(!darkMode);
                          setCookie("reeviewrDarkMode", !darkMode);
                        }}
                        large={true}
                      />
                    </Menu>
                  }
                  position={Position.BOTTOM_LEFT}
                >
                  <Button
                    className="textButton headerItem"
                    minimal={true}
                    rightIcon="caret-down"
                  >
                    Menu
                  </Button>
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
      </main>
    </App>
  );
};

export default AppNav;
