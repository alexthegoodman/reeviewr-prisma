import * as React from "react";

import { HomeProps } from "./Home.d";
import ArtistCard from "../../ui/ArtistCard/ArtistCard";
import { useQuery } from "react-apollo-hooks";
import { USERS_QUERY } from "../../../graphql/queries/user";
import { USER_TRACKS_QUERY } from "../../../graphql/queries/userTrack";
import UserTrack from "../../data/UserTrack/UserTrack";

import HorizontalScroll from "react-scroll-horizontal";
import Legacy from "../../../services/Legacy";

const Home: React.FC<HomeProps> = () => {
  const legacy = new Legacy();

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
      <h1 style={{ color: "white" }}>Artists</h1>
      <HorizontalScroll
        style={{ height: 225, overflow: "visible" }}
        reverseScroll={true}
      >
        {userData.users.map(user => {
          let firstName = user.userMeta.filter(
            meta => meta.metaName === "firstName"
          );
          let lastName = user.userMeta.filter(
            meta => meta.metaName === "lastName"
          );
          let userArtistName = user.userMeta.filter(
            meta => meta.metaName === "userArtistName"
          );

          firstName =
            typeof firstName[0] !== "undefined"
              ? firstName[0]["metaValue"]
              : "";
          lastName =
            typeof lastName[0] !== "undefined" ? lastName[0]["metaValue"] : "";
          userArtistName =
            typeof userArtistName[0] !== "undefined"
              ? userArtistName[0]["metaValue"]
              : "";

          console.info("user", user);

          const profileImage = legacy.extractProfileImage(user);

          const reviewCount = user.reviews.length;
          const trackCount = user.userTracks.length;

          // TODO: add new profileImage meta to user
          // grab the first image attachedFile for legacy users, which may be cover art or hero image
          // but prefer the new profileImage

          return (
            <ArtistCard
              key={user.id}
              className="cardInRow"
              imageUrl={profileImage}
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
      </HorizontalScroll>

      <h1 style={{ color: "white" }}>Tracks</h1>

      {tracksData.userTracks.map(track => {
        return <UserTrack key={track.id} track={track} />;
      })}
      {/* <Button onClick={toggleTrack}>Toggle Track</Button>
        <NotFoundBoundary render={NotFound}>{children}</NotFoundBoundary> */}
    </>
  );
};

export default Home;
