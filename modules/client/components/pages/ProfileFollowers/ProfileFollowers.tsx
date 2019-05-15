import * as React from "react";

import { ProfileFollowersProps } from "./ProfileFollowers.d";
import ProfileNav from "../../layout/ProfileNav/ProfileNav";
import UserTrack from "../../data/UserTrack/UserTrack";
import { UserTrack as IUserTrack } from "../../../../../__generated__/gql-gen/grapql-types";
import { ARTIST_TRACKS_QUERY } from "../../../graphql/queries/userTrack";
import { useQuery } from "react-apollo-hooks";
import Utility from "../../../../services/Utility";
import { USER_QUERY } from "../../../graphql/queries/user";
import Legacy from "../../../../services/Legacy";
import { Text } from "@blueprintjs/core";

const ProfileFollowers: React.FC<ProfileFollowersProps> = ({ artistId }) => {
  const legacy = new Legacy();
  const utility = new Utility();

  // let route = useCurrentRoute();
  // let loadingRoute = useLoadingRoute();
  // let navigation = useNavigation();

  // const { artistId, name } = route.lastChunk.request.params;

  const { data: userData, error: userError, loading: userLoading } = useQuery(
    USER_QUERY,
    { variables: { id: artistId } }
  );

  let followers = null;
  if (utility.isDefinedWithContent(userData.user)) {
    let savedFollowers = legacy.extractMetaValue(
      userData.user.userMeta,
      "followers"
    );
    if (savedFollowers !== "") {
      followers = decodeURIComponent(followers);
      followers = followers.split(", ");
    }
    console.info("followers", followers);
  }

  const {
    data: tracksData,
    error: tracksError,
    loading: tracksLoading,
    refetch,
  } = useQuery(ARTIST_TRACKS_QUERY, { variables: { artistId: followers } });

  console.info("User data", artistId, name, userData);

  console.info("Tracks Data", artistId, tracksData, tracksLoading, tracksError);

  // track fetching is technically about ProfileNav which does the UserFetch
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

  if (tracksLoading) {
    return <div>Loading tracks...</div>;
  }
  if (tracksError) {
    return <div>Error on tracks! {tracksError.message}</div>;
  }
  if (
    !utility.isDefinedWithContent(tracksData.userTracks) ||
    !utility.isDefinedWithContent(tracksData)
  ) {
    // TODO: why require this refetch? Stacked queries? Navigation hooks?
    // refetch();
    return (
      <ProfileNav artistId={artistId} userData={userData}>
        <Text tagName="h2">No followers yet!</Text>
      </ProfileNav>
    );
  }

  return (
    <ProfileNav artistId={artistId} userData={userData}>
      {tracksData.userTracks.map((track: IUserTrack) => {
        return <UserTrack key={track.id} track={track} />;
      })}
    </ProfileNav>
  );
};

export default ProfileFollowers;
