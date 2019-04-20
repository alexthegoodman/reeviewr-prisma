import * as React from "react";

import { TrackDetailProps } from "./TrackDetail.d";
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";
import { USER_TRACK_QUERY } from "../../../graphql/queries/userTrack";
import { useQuery } from "react-apollo-hooks";
import UserTrack from "../../data/UserTrack/UserTrack";
import GraphCardData from "../../data/GraphCardData/GraphCardData";

const TrackDetail: React.FC<TrackDetailProps> = () => {
  let route = useCurrentRoute();
  let loadingRoute = useLoadingRoute();
  let navigation = useNavigation();

  const { trackId, name } = route.lastChunk.request.params;

  const {
    data: trackData,
    error: trackError,
    loading: trackLoading,
  } = useQuery(USER_TRACK_QUERY, { variables: { id: trackId } });

  if (trackLoading) {
    return <div>Loading track...</div>;
  }
  if (trackError) {
    return <div>Error on track! {trackError.message}</div>;
  }

  console.info("Track Data", trackId, trackData);

  return (
    <>
      <h1>Track Detail</h1>
      {/** TODO: Add Review button in red near top of page as well */}
      <UserTrack track={trackData.userTrack}>
        <GraphCardData />
        <GraphCardData />
        <GraphCardData />
      </UserTrack>
    </>
  );
};

export default TrackDetail;
