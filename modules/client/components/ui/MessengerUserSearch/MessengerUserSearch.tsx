import * as React from "react";

import { MessengerUserSearchProps } from "./MessengerUserSearch.d";

import Autocomplete from "react-autocomplete";
import { useQuery } from "react-apollo-hooks";
import { USERS_QUERY } from "../../../graphql/queries/user";
import Legacy from "../../../../services/Legacy";
import Utility from "../../../../services/Utility";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";

const MessengerUserSearch: React.FC<MessengerUserSearchProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const legacy = new Legacy();
  const utility = new Utility();

  const clickHandler = e => onClick(e);

  const [searchValue, setSearchValue] = React.useState("");
  const { data: userData, error: userError, loading: userLoading } = useQuery(
    USERS_QUERY,
    { variables: { search: searchValue } }
  );

  let users = [];
  let loading = <></>;
  if (userLoading) {
    loading = <LoadingIndicator loadingText="Loading users..." />;
  } else {
    users = userData.users;
  }
  if (userError) {
    return <div>Error on users! {userError.message}</div>;
  }

  return (
    <>
      <Autocomplete
        getItemValue={item => item.userEmail}
        items={users}
        renderItem={(user, isHighlighted) => {
          let userMetaList = legacy.extractMultipleMeta(user.userMeta, [
            "userArtistName",
            "profileImage",
          ]);

          return (
            <div
              key={user.id}
              style={{ background: isHighlighted ? "lightgray" : "white" }}
            >
              {userMetaList["userArtistName"]} {user.userEmail}
            </div>
          );
        }}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onSelect={val => setSearchValue(val)}
      />
      {loading}
    </>
  );
};

export default MessengerUserSearch;
