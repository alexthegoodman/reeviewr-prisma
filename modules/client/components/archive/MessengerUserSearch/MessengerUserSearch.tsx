import * as React from "react";

import { MessengerUserSearchProps } from "./MessengerUserSearch.d";

import Autocomplete from "react-autocomplete";
import { useQuery } from "@apollo/react-hooks";
import { USERS_QUERY, ALL_USERS_QUERY } from "../../../graphql/queries/user";
import DataHandler from "../../../../services/DataHandler";
import Utility from "../../../../services/Utility";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import Strings from "../../../services/Strings";
import { Text } from "@blueprintjs/core";

const MessengerUserSearch: React.FC<MessengerUserSearchProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  selectedUser = null,
  setSendDisabled = () => console.info("Send Send Disabled"),
  setSelectedUser = () => console.info("Set Selected User"),
  selectedThread = null,
  chatkitUser = null,
  roomUsers = null,
}) => {
  const dataHandler = new DataHandler();
  const utility = new Utility();
  const strings = new Strings();

  const clickHandler = (e) => onClick(e);

  const [searchValue, setSearchValue] = React.useState("");

  const {
    data: userData,
    error: userError,
    loading: userLoading,
  } = useQuery(ALL_USERS_QUERY, { variables: { search: searchValue } });

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

  let selectedUserName = "";
  if (selectedUser !== null) {
    let userMetaList = dataHandler.extractMultipleMeta(selectedUser.userMeta, [
      "userArtistName",
      "profileImage",
    ]);
    selectedUserName = userMetaList["userArtistName"];
  }

  return (
    <>
      {roomUsers !== null ? (
        <Text tagName="h5" className="headline">
          Message: {selectedUserName}
        </Text>
      ) : (
        <>
          <Text>Find User to Message</Text>
          <Autocomplete
            getItemValue={(user) => {
              let userMetaList = dataHandler.extractMultipleMeta(
                user.userMeta,
                ["userArtistName", "profileImage"]
              );
              setSelectedUser(user);
              return strings.decode(userMetaList["userArtistName"]);
            }}
            items={users}
            renderItem={(user, isHighlighted) => {
              let userMetaList = dataHandler.extractMultipleMeta(
                user.userMeta,
                ["userArtistName", "profileImage"]
              );

              return (
                <div
                  key={user.id}
                  style={{ background: isHighlighted ? "lightgray" : "white" }}
                >
                  {strings.decode(userMetaList["userArtistName"])}
                </div>
              );
            }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onSelect={(val) => {
              setSearchValue(val);
            }}
          />
        </>
      )}

      {loading}
    </>
  );
};

export default MessengerUserSearch;
