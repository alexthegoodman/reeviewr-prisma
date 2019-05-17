import * as React from "react";

import { ArtistDetailProps } from "./ArtistDetail.d";
import ProfileNav from "../../layout/ProfileNav/ProfileNav";
import UserTrack from "../../data/UserTrack/UserTrack";
import { UserTrack as IUserTrack } from "../../../../../__generated__/gql-gen/grapql-types";
import { ARTIST_TRACKS_QUERY } from "../../../graphql/queries/userTrack";
import { useQuery } from "react-apollo-hooks";
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";
import Legacy from "../../../../services/Legacy";
import Core from "../../../../services/Core";
import Utility from "../../../../services/Utility";
import { USER_QUERY } from "../../../graphql/queries/user";

const ArtistDetail: React.FC<ArtistDetailProps> = ({ artistId }) => {
  const utility = new Utility();

  // let route = useCurrentRoute();
  // let loadingRoute = useLoadingRoute();
  // let navigation = useNavigation();

  // const { artistId, name } = route.lastChunk.request.params;

  const {
    data: tracksData,
    error: tracksError,
    loading: tracksLoading,
    refetch,
  } = useQuery(ARTIST_TRACKS_QUERY, { variables: { artistId } });

  const { data: userData, error: userError, loading: userLoading } = useQuery(
    USER_QUERY,
    { variables: { id: artistId } }
  );

  // console.info("User data", artistId, name, userData);

  // console.info("Tracks Data", artistId, tracksData, tracksLoading, tracksError);

  // track fetching is technically about ProfileNav which does the UserFetch
  if (tracksLoading) {
    return <div>Loading tracks...</div>;
  }
  if (tracksError) {
    return <div>Error on tracks! {tracksError.message}</div>;
  }
  if (
    !utility.isDefinedWithContent(tracksData) &&
    !utility.isDefinedWithContent(tracksData.userTracks)
  ) {
    // TODO: why require this refetch? Stacked queries? Navigation hooks?
    // refetch();
    return <div>Void data error 20...</div>;
  }
  if (userLoading) {
    return <div>Loading user...</div>;
  }
  if (userError) {
    return <div>Error on user! {userError.message}</div>;
  }
  if (
    Object.keys(userData).length === 0 ||
    !utility.isDefinedWithContent(userData)
  ) {
    return <div>Void data error 10...</div>;
  }

  return (
    <ProfileNav artistId={artistId} userData={userData}>
      {tracksData.userTracks.map((track: IUserTrack) => {
        return <UserTrack key={track.id} track={track} />;
      })}
    </ProfileNav>
  );
};

export default ArtistDetail;
