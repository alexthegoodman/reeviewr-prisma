import * as React from "react";

import { ProfileFollowingProps } from "./ProfileFollowing.d";
import ProfileNav from "../../layout/ProfileNav/ProfileNav";
import { useQuery } from "@apollo/react-hooks";
import Utility from "../../../../services/Utility";
import Legacy from "../../../../services/Legacy";
import { Text } from "@blueprintjs/core";
import LoadingIndicator from "../../system/LoadingIndicator/LoadingIndicator";
import Core from "../../../../services/Core";

const ProfileFollowing: React.FC<ProfileFollowingProps> = ({ artistId }) => {
  const legacy = new Legacy();
  const utility = new Utility();
  const core = new Core();

  // let route = useCurrentRoute();
  // let loadingRoute = useLoadingRoute();
  // let navigation = useNavigation();

  // const { artistId, name } = route.lastChunk.request.params;

  // const {
  //   data: userData,
  //   error: userError,
  //   loading: userLoading,
  // } = useQuery(USER_QUERY, { variables: { id: artistId } });

  // let following = null;
  // if (utility.isDefinedWithContent(userData.user)) {
  //   let savedFollowing = legacy.extractMetaValue(
  //     userData.user.userMeta,
  //     "following"
  //   );
  //   following = core.getFromCSV(savedFollowing);
  //   // console.info("following", following);
  // }

  // const {
  //   data: usersData,
  //   error: usersError,
  //   loading: usersLoading,
  //   refetch,
  // } = useQuery(INDIVIDUAL_USERS_QUERY, { variables: { userIds: following } });

  // // console.info("User data", artistId, name, userData);

  // // console.info("Tracks Data", artistId, tracksData, tracksLoading, tracksError);

  // // track fetching is technically about ProfileNav which does the UserFetch
  // if (userLoading) {
  //   return <LoadingIndicator loadingText="Loading artist..." />;
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

  // if (usersLoading) {
  //   return <LoadingIndicator loadingText="Loading following..." />;
  // }
  // if (usersError) {
  //   return <div>Error on tracks! {usersError.message}</div>;
  // }
  // // console.info("uuserdata", usersData);
  // if (
  //   !utility.isDefinedWithContent(usersData.users) ||
  //   !utility.isDefinedWithContent(usersData)
  // ) {
  //   // TODO: why require this refetch? Stacked queries? Navigation hooks?
  //   // refetch();
  //   return (
  //     <ProfileNav artistId={artistId} userData={userData}>
  //       <Text tagName="h2">Not following anybody yet!</Text>
  //     </ProfileNav>
  //   );
  // }

  return (
    <ProfileNav artistId={artistId} userData={null}>
      <section className="grid col-3">
        {/* {usersData.users.map(user => {
          return <ArtistCardData key={user.id} user={user} />;
        })} */}
      </section>
    </ProfileNav>
  );
};

export default ProfileFollowing;
