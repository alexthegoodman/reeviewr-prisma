import * as React from "react";
import { hot } from "react-hot-loader";

import { AppProps } from "./App.d";
import {
  useCurrentRoute,
  useLoadingRoute,
  NotFoundBoundary,
  useNavigation,
} from "react-navi";
// import BusyIndicator from "react-busy-indicator";

import NotFound from "../../pages/status/NotFound/NotFound";
import { useAppContext } from "../../../context";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Header from "../../ui/Header/Header";
import Sidebar from "../../ui/Sidebar/Sidebar";
import MenuItem from "../../ui/MenuItem/MenuItem";
import { Menu, Button } from "@blueprintjs/core";
import ProfileItem from "../../ui/ProfileItem/ProfileItem";
import BeyondSearch from "../../ui/BeyondSearch/BeyondSearch";
import ArtistCard from "../../ui/ArtistCard/ArtistCard";
import Track from "../../ui/Track/Track";
import ReviewCard from "../../ui/ReviewCard/ReviewCard";
import { useQuery } from "react-apollo-hooks";
import { USERS_QUERY } from "../../../graphql/queries/user";
import {
  USER_TRACKS_QUERY,
  COVER_IMAGE_QUERY,
} from "../../../graphql/queries/userTrack";
import UserTrack from "../../data/UserTrack/UserTrack";

const App: React.FC<AppProps> = ({ children }) => {
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

  const { data: userData, error: userError, loading: userLoading } = useQuery(
    USERS_QUERY
  );

  console.info("userData", userData);

  const {
    data: tracksData,
    error: tracksError,
    loading: tracksLoading,
  } = useQuery(USER_TRACKS_QUERY);

  if (userLoading) {
    return <div>Loading users...</div>;
  }
  if (userError) {
    return <div>Error on users! {userError.message}</div>;
  }

  if (tracksLoading) {
    return <div>Loading tracks...</div>;
  }
  if (tracksError) {
    return <div>Error on tracks! {userError.message}</div>;
  }

  console.info("tracksData", tracksData);

  return (
    <>
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
        <h1 style={{ color: "white" }}>Artists</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            // overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "-ms-autohiding-scrollbar",
          }}
        >
          {userData.users.map(user => {
            let imageUrl = user.userMeta.filter(
              meta => meta.metaName === "heroId"
            );
            let firstName = user.userMeta.filter(
              meta => meta.metaName === "firstName"
            );
            let lastName = user.userMeta.filter(
              meta => meta.metaName === "lastName"
            );
            let userArtistName = user.userMeta.filter(
              meta => meta.metaName === "userArtistName"
            );
            imageUrl =
              typeof imageUrl[0] !== "undefined"
                ? imageUrl[0]["metaValue"]
                : "";
            firstName =
              typeof firstName[0] !== "undefined"
                ? firstName[0]["metaValue"]
                : "";
            lastName =
              typeof lastName[0] !== "undefined"
                ? lastName[0]["metaValue"]
                : "";
            userArtistName =
              typeof userArtistName[0] !== "undefined"
                ? userArtistName[0]["metaValue"]
                : "";
            console.info("user", user);
            console.info("imageUrl", imageUrl);
            const reviewCount = user.reviews.length;
            const trackCount = user.userTracks.length;
            return (
              <ArtistCard
                key={user.id}
                className="cardInRow"
                imageUrl={imageUrl}
                artistTitle={
                  userArtistName !== ""
                    ? userArtistName
                    : `${firstName} ${lastName}`
                }
                reviewCount={reviewCount}
                trackCount={trackCount}
                onClick={() => console.info("onClick")}
              />
            );
          })}
        </div>

        <h1 style={{ color: "white" }}>Tracks</h1>

        {tracksData.userTracks.map(track => {
          return <UserTrack track={track} />;
        })}

        {/* <Button onClick={toggleTrack}>Toggle Track</Button>
        <NotFoundBoundary render={NotFound}>{children}</NotFoundBoundary> */}
      </section>
    </>
  );
};

export default hot(module)(App);
