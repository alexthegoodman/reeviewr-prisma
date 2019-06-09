import * as React from "react";

import { ArtistsProps } from "./Artists.d";
import ArtistCardData from "../../data/ArtistCardData/ArtistCardData";
import { USERS_QUERY } from "../../../graphql/queries/user";
import { useQuery } from "react-apollo-hooks";
import LoadingIndicator from "../../ui/LoadingIndicator/LoadingIndicator";

const Artists: React.FC<ArtistsProps> = () => {
  const { data: userData, error: userError, loading: userLoading } = useQuery(
    USERS_QUERY
  );
  if (userLoading) {
    return <LoadingIndicator loadingText="Loading users..." />;
  }
  if (userError) {
    return <div>Error on users! {userError.message}</div>;
  }

  // console.info("Artists Data", userData);

  return (
    <>
      <h1 className="headline">Artists</h1>
      <section className="grid col-4">
        {userData.users.map(user => {
          return <ArtistCardData key={user.id} user={user} />;
        })}
      </section>
    </>
  );
};

export default Artists;
