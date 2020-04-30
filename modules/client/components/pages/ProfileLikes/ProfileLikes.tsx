import * as React from "react";

import { ProfileLikesProps } from "./ProfileLikes.d";
import ProfileNav from "../../layout/ProfileNav/ProfileNav";
import { useQuery } from "@apollo/react-hooks";
import Utility from "../../../../services/Utility";
import { USER_QUERY } from "../../../graphql/queries/user";
import { Text } from "@blueprintjs/core";
import Legacy from "../../../../services/Legacy";
import Core from "../../../../services/Core";
import LoadingIndicator from "../../system/LoadingIndicator/LoadingIndicator";

const ProfileLikes: React.FC<ProfileLikesProps> = ({ artistId }) => {
  const core = new Core();
  const legacy = new Legacy();
  const utility = new Utility();

  // let route = useCurrentRoute();
  // let loadingRoute = useLoadingRoute();
  // let navigation = useNavigation();

  // const { artistId, name } = route.lastChunk.request.params;

  // console.info("ProfileLikes", artistId);

  // const {
  //   data: userData,
  //   error: userError,
  //   loading: userLoading,
  // } = useQuery(USER_QUERY, { variables: { id: artistId } });

  // let favs = null;
  // if (utility.isDefinedWithContent(userData.user)) {
  //   let savedFavs = legacy.extractMetaValue(userData.user.userMeta, "favs");
  //   favs = core.getFromCSV(savedFavs);
  //   // console.info("favs", favs);
  // }

  // const {
  //   data: tracksData,
  //   error: tracksError,
  //   loading: tracksLoading,
  //   refetch,
  // } = useQuery(INDIVIDUAL_TRACKS_QUERY, { variables: { trackIds: favs } });

  // // console.info("User data", artistId, name, userData);

  // // console.info("Tracks Data", artistId, tracksData, tracksLoading, tracksError);

  // // track fetching is technically about ProfileNav which does the UserFetch
  // if (userLoading) {
  //   return <LoadingIndicator loadingText="Loading artiist..." />;
  // }
  // if (userError) {
  //   return <div>Error on user! {userError.message}</div>;
  // }
  // if (
  //   Object.keys(userData).length === 0 ||
  //   !utility.isDefinedWithContent(userData)
  // ) {
  //   return <div>Void data error 10...</div>;
  // }

  // if (tracksLoading) {
  //   return <LoadingIndicator loadingText="Loading likes..." />;
  // }
  // if (tracksError) {
  //   return <div>Error on tracks! {tracksError.message}</div>;
  // }
  // if (
  //   !utility.isDefinedWithContent(tracksData.userTracks) ||
  //   !utility.isDefinedWithContent(tracksData)
  // ) {
  //   // TODO: why require this refetch? Stacked queries? Navigation hooks?
  //   // refetch();
  //   return (
  //     <ProfileNav artistId={artistId} userData={userData}>
  //       <Text tagName="h2">No likes yet!</Text>
  //     </ProfileNav>
  //   );
  // }

  return (
    <ProfileNav artistId={artistId} userData={null}>
      {/* {tracksData.userTracks.map((track: IUserTrack) => {
        return <UserTrack key={track.id} track={track} reviewLimit={3} />;
      })} */}
    </ProfileNav>
  );
};

export default ProfileLikes;
