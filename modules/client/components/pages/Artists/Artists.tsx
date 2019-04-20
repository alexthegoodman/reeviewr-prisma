import * as React from "react";

import { ArtistsProps } from "./Artists.d";
import ArtistCardData from "../../data/ArtistCardData/ArtistCardData";
import { USERS_QUERY } from "../../../graphql/queries/user";
import { useQuery } from "react-apollo-hooks";

const Artists: React.FC<ArtistsProps> = () => {
  const { data: userData, error: userError, loading: userLoading } = useQuery(
    USERS_QUERY
  );
  if (userLoading) {
    return <div>Loading users...</div>;
  }
  if (userError) {
    return <div>Error on users! {userError.message}</div>;
  }

  console.info("Artists Data", userData);

  return (
    <>
      <h1>Artists</h1>
      {userData.users.map(user => {
        return <ArtistCardData key={user.id} user={user} />;
      })}
    </>
  );
};

export default Artists;
