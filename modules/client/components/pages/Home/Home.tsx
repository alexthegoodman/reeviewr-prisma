import * as React from "react";

import { HomeProps } from "./Home.d";
import ArtistCard from "../../ui/ArtistCard/ArtistCard";
import { useQuery } from "react-apollo-hooks";
import { USERS_QUERY } from "../../../graphql/queries/user";
import { USER_TRACKS_QUERY } from "../../../graphql/queries/userTrack";
import UserTrack from "../../data/UserTrack/UserTrack";

const Home: React.FC<HomeProps> = () => {
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

export default Home;
