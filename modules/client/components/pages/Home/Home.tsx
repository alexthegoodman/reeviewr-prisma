import * as React from "react";

import { HomeProps } from "./Home.d";
import ArtistCard from "../../ui/ArtistCard/ArtistCard";
import { useQuery } from "react-apollo-hooks";
import { USERS_QUERY } from "../../../graphql/queries/user";
import { USER_TRACKS_QUERY } from "../../../graphql/queries/userTrack";
import UserTrack from "../../data/UserTrack/UserTrack";

import HorizontalScroll from "react-scroll-horizontal";
import Legacy from "../../../../services/Legacy";
import ArtistCardData from "../../data/ArtistCardData/ArtistCardData";

const Home: React.FC<HomeProps> = () => {
  const { data: userData, error: userError, loading: userLoading } = useQuery(
    USERS_QUERY
  );

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
    return <div>Error on tracks! {tracksError.message}</div>;
  }

  console.info("Home Data", userData, tracksData);

  return (
    <>
      {/** TODO: Announcements, Social Media embeds, content plugs, etc */}

      <HorizontalScroll
        style={{ height: 225, overflow: "visible", margin: "25px 0 50px 0" }}
        reverseScroll={true}
      >
        {userData.users.map(user => {
          return <ArtistCardData key={user.id} user={user} />;
        })}
      </HorizontalScroll>

      {tracksData.userTracks.map(track => {
        return <UserTrack key={track.id} track={track} />;
      })}
    </>
  );
};

export default Home;
