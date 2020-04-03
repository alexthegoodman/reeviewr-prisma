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
  Tag,
  Text,
  Tooltip,
} from "@blueprintjs/core";
import * as photon from "@generated/photon";
import * as $ from "jquery";
import { useCookies } from "react-cookie";
import Legacy from "../../../../services/Legacy";
import Utility from "../../../../services/Utility";
import Strings from "../../../services/Strings";
import BeyondSearchData from "../../data/BeyondSearchData/BeyondSearchData";
import MessageMenu from "../../data/MessageMenu/MessageMenu";
import NotificationMenu from "../../data/NotificationMenu/NotificationMenu";
import WhoToFollow from "../../data/WhoToFollow/WhoToFollow";
import Advertisement from "../../ui/Advertisement/Advertisement";
import ContentFooter from "../../ui/ContentFooter/ContentFooter";
import Header from "../../ui/Header/Header";
import Logo from "../../ui/Logo/Logo";
import MenuItem from "../../ui/MenuItem/MenuItem";
import ProfileItem from "../../ui/ProfileItem/ProfileItem";
import Sidebar from "../../ui/Sidebar/Sidebar";
import App from "../App/App";
import { GET_NOTIFICATIONS } from "../../../graphql/queries/notification";
import { useQuery } from "react-apollo";
import { GET_THREADS } from "../../../graphql/queries/thread";
import AuthClient from "../../../services/AuthClient";

const AppNav: React.FC<AppNavProps> = ({ children }) => {
  const utility = new Utility();
  const legacy = new Legacy();
  const strings = new Strings();

  const route = useCurrentRoute();
  const navigation = useNavigation();
  const [cookies, setCookie, removeCookie] = useCookies([
    "reeviewrId",
    "reeviewrDarkMode",
  ]);

  const [{ tour, userData }, dispatch] = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(
    cookies["reeviewrDarkMode"] === "true" ? true : false
  );
  const authClient = new AuthClient();

  const {
    data: notificationsData,
    error: notificationsError,
    loading: notificationsLoading,
  } = useQuery(GET_NOTIFICATIONS, {
    variables: {
      id: cookies["reeviewrId"],
      first: 3,
    },
    pollInterval: process.env.POLL_INTERVAL as any, // 30-second poll interval
  });

  const {
    data: threadsData,
    error: threadsError,
    loading: threadsLoading,
  } = useQuery(GET_THREADS, {
    variables: {
      id: cookies["reeviewrId"],
      first: 3,
    },
    pollInterval: process.env.POLL_INTERVAL as any,
  });

  console.info("threadsData", threadsData);

  let loggedIn = false;
  if (utility.isDefinedWithContent(userData)) {
    loggedIn = true;
  }

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
          <Button
            className="button createButton"
            onClick={() => navigate("/posts/create", true)}
            icon="plus"
          >
            Create Post
          </Button>
          <Menu className="sidebarMenu">
            <MenuItem
              className="joyrideYourFeedPage"
              active={route.url.pathname === "/feed" ? true : false}
              onClick={() => navigate("/feed", true)}
            >
              <Icon icon="property" />
              Your Feed
            </MenuItem>
            <MenuItem
              className="joyrideJoinedPodsPage"
              active={route.url.pathname === "/joined-pods" ? true : false}
              onClick={() => navigate("/joined-pods", true)}
            >
              <Icon icon="layout-grid" />
              Joined Pods
            </MenuItem>
            <MenuItem
              className="joyrideInviteFriendsPage"
              active={route.url.pathname === "/invite-friends" ? true : false}
              onClick={() => navigate("/invite-friends", true)}
            >
              <Icon icon="new-person" />
              Invite Friends
            </MenuItem>
          </Menu>
          <WhoToFollow />
          <Advertisement />
        </Sidebar>

        <Header
          leftElements={
            <>
              <div className="mobileHide w100 row">
                <Menu className="headerMenu">
                  <MenuItem
                    className="joyrideExplorePage"
                    active={route.url.pathname === "/" ? true : false}
                    onClick={() => navigate("/")}
                  >
                    Explore
                  </MenuItem>
                  <MenuItem
                    className="joyrideFindPeoplePage"
                    active={
                      route.url.pathname === "/find-people" ? true : false
                    }
                    onClick={() => navigate("/find-people")}
                  >
                    Find People
                  </MenuItem>
                </Menu>
                <BeyondSearchData />
              </div>
            </>
          }
          rightElements={
            <>
              <div className="mobileHide w100 row">
                <Tooltip content="Take a Tour" position={Position.BOTTOM}>
                  <Button
                    className="helpButton headerActionButton headerItem"
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
                    icon="lifesaver"
                  />
                </Tooltip>

                {loggedIn ? (
                  <>
                    <Popover>
                      <Tooltip
                        content="Notifications"
                        position={Position.BOTTOM}
                      >
                        <Button
                          className="notificationsButton headerActionButton headerItem"
                          minimal={true}
                          onClick={async () => {}}
                          icon="notifications"
                        >
                          <Tag
                            className="buttonTag"
                            round={true}
                            intent="danger"
                          >
                            {typeof notificationsData !== "undefined" &&
                            typeof notificationsData.findManyNotification !==
                              "undefined"
                              ? notificationsData.findManyNotification.length
                              : 0}
                          </Tag>
                        </Button>
                      </Tooltip>

                      <div className="popoverContent">
                        <NotificationMenu
                          notificationsData={notificationsData}
                        />
                      </div>
                    </Popover>

                    <Popover>
                      <Tooltip content="Messages" position={Position.BOTTOM}>
                        <Button
                          className="messagesButton headerActionButton headerItem"
                          minimal={true}
                          onClick={async () => {}}
                          icon="envelope"
                        />
                      </Tooltip>

                      <div className="popoverContent">
                        <MessageMenu threadsData={threadsData} />
                      </div>
                    </Popover>
                  </>
                ) : (
                  <Menu className="headerMenu">
                    <MenuItem
                      active={route.url.pathname === "/login" ? true : false}
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </MenuItem>
                    <MenuItem
                      active={route.url.pathname === "/sign-up" ? true : false}
                      onClick={() => navigate("/sign-up")}
                    >
                      Sign Up
                    </MenuItem>
                  </Menu>
                )}

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
                      {loggedIn ? (
                        <>
                          <MenuItem>Profile</MenuItem>
                          <MenuItem>Support</MenuItem>
                          <MenuItem onClick={authClient.logout}>
                            Log Out
                          </MenuItem>
                        </>
                      ) : (
                        <>
                          <MenuItem>Support</MenuItem>
                        </>
                      )}
                    </Menu>
                  }
                  position={Position.BOTTOM_LEFT}
                >
                  {loggedIn ? (
                    <ProfileItem className="headerItem" userData={userData} />
                  ) : (
                    <Button
                      className="textButton headerItem"
                      minimal={true}
                      rightIcon="caret-down"
                    >
                      Menu
                    </Button>
                  )}
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
