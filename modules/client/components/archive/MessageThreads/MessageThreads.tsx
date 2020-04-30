import * as React from "react";

import { Button, Text } from "@blueprintjs/core";
import Legacy from "../../../../services/Legacy";
import { useAppContext } from "../../../context";
// import { USER_ID_QUERY } from "../../../graphql/queries/user";
import client from "../../../services/ApolloClient";
import LoadingIndicator from "../../system/LoadingIndicator/LoadingIndicator";
import { MessageThreadsProps } from "./MessageThreads.d";

const MessageThreads: React.FC<MessageThreadsProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  chatkitUser = null,
  onSelectThread = () => console.info("Select Thread"),
  setEmptyThead = () => console.info("Open Empty Thread"),
  selectedUser = null,
  setSelectedThread = () => console.info("Set Selected Thread"),
  selectedThread = null,
  setSelectedUser = () => console.info("Set Selected User"),
  setSendDisabled = () => console.info("Send Send Disabled"),
}) => {
  const legacy = new Legacy();

  const [{ userData }, dispatch] = useAppContext();

  const userMetaList = legacy.extractMultipleMeta(userData.user.userMeta, [
    "userArtistName",
    "profileImage",
  ]);

  if (chatkitUser !== null) {
    return (
      <section className="messageThreads">
        <Button
          className="actionButton"
          onClick={() => {
            setEmptyThead(true);
            setSelectedUser(null);
            setSelectedThread(null);
          }}
        >
          Start Thread
        </Button>
        {chatkitUser.rooms.map((room, i) => {
          let otherUser = null;
          for (const id in room.users) {
            if (id !== userData.user.id) {
              otherUser = room.users[id];
            }
          }

          // console.info(
          //   "thread",
          //   chatkitUser.roomSubscriptions,
          //   room,
          //   room.users,
          //   otherUser
          // );

          return (
            <div
              className={
                selectedThread === room.id ? "thread selected" : "thread"
              }
              key={room.id}
              onClick={() => {
                // console.info("room", room, room.users);

                onSelectThread(room.id);

                setSendDisabled(false);

                // client
                //   .query({
                //     query: USER_ID_QUERY,
                //     variables: { id: otherUser.id },
                //   })
                //   .then(data => {
                //     setSelectedUser(data.data.user);
                //     setEmptyThead(false);
                //   });
              }}
            >
              <div className="threadContain">
                <div className="avatars">
                  <div className="avatar avatar1">
                    <img src={userMetaList["profileImage"]} alt="" title="" />
                  </div>
                  <div className="avatar avatar2">
                    <img src={otherUser.avatarURL} alt="" title="" />
                  </div>
                </div>
                <div className="members">
                  <Text tagName="p" className="member member1">
                    {userMetaList["userArtistName"]}
                  </Text>
                  <Text tagName="p" className="member member2">
                    {otherUser !== null ? otherUser.name : ""}
                  </Text>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
  return <LoadingIndicator loadingText="Loading threads..." />;
};

export default MessageThreads;
