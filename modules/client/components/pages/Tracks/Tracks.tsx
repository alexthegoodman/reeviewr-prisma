import * as React from "react";

import { TracksProps } from "./Tracks.d";
import UserTrack from "../../data/UserTrack/UserTrack";
import { USER_TRACKS_QUERY } from "../../../graphql/queries/userTrack";
import { useQuery } from "react-apollo-hooks";
import { UserTrack as IUserTrack } from "../../../../../__generated__/gql-gen/grapql-types";

const Tracks: React.FC<TracksProps> = () => {
  const {
    data: tracksData,
    error: tracksError,
    loading: tracksLoading,
  } = useQuery(USER_TRACKS_QUERY);
  if (tracksLoading) {
    return <div>Loading tracks...</div>;
  }
  if (tracksError) {
    return <div>Error on tracks! {tracksError.message}</div>;
  }

  console.info("Tracks Data", tracksData);

  return (
    <>
      <h1>Tracks</h1>
      {tracksData.userTracks.map((track: IUserTrack) => {
        return <UserTrack key={track.id} track={track} />;
      })}
    </>
  );
};

export default Tracks;
