import * as React from "react";

import { MessengerProps } from "./Messenger.d";
import MessengerUserSearch from "../MessengerUserSearch/MessengerUserSearch";
import MessengerReply from "../MessengerReply/MessengerReply";
import MessengerHistory from "../MessengerHistory/MessengerHistory";
import { Message } from "react-chat-ui";
import { Text, Callout } from "@blueprintjs/core";
import DataHandler from "../../../../services/DataHandler";
import Utility from "../../../../services/Utility";
import * as _ from "lodash";

const Messenger: React.FC<MessengerProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  chatkitUser = null,
  selectedThread = null,
  emptyThread = false,
  selectedUser = null,
  sendDisabled = true,
  setSendDisabled = () => console.info("Set Send Disabled"),
  setSelectedUser = () => console.info("Set Selected User"),
  messages = null,
  setMessages = () => console.info("Set Messages"),
  allRoomsSubscribed = false,
  setAllRoomsSubscribed = () => console.info("Set All Rooms Subscribed"),
  updateMessages = () => console.info("Update Messages"),
}) => {
  const dataHandler = new DataHandler();
  const utiility = new Utility();

  if (chatkitUser !== null && (selectedThread !== null || emptyThread)) {
    if (utiility.isDefinedWithContent(selectedThread)) {
      updateMessages();
    }

    const sendMessage = (roomId, messageText) => {
      if (roomId !== null) {
        // send message
        chatkitUser
          .sendSimpleMessage({
            roomId: roomId,
            text: messageText,
          })
          .then((messageId) => {
            console.log(`Added message to ${roomId}`);
          })
          .catch((err) => {
            console.error(`Error adding message to ${roomId}: ${err}`);
          });
      } else {
        console.error("Must have a room to send message");
      }
    };

    const sendMessageAndCreateRoom = (
      room = null,
      userIds = [],
      messageText = ""
    ) => {
      if (room === null) {
        // create private room
        chatkitUser
          .createRoom({
            name: "privateMessage",
            private: true,
            addUserIds: userIds,
          })
          .then((chatkitRoom) => {
            sendMessage(chatkitRoom, messageText);
          })
          .catch((err) => {
            console.error(`Error creating room ${err}`);
          });
      } else {
        sendMessage(room, messageText);
      }
    };

    let selectedUserName = "";
    if (selectedUser != null) {
      let userMetaList = dataHandler.extractMultipleMeta(
        selectedUser.userMeta,
        ["userArtistName", "profileImage"]
      );
      selectedUserName = userMetaList["userArtistName"];
      if (sendDisabled) {
        setSendDisabled(false);
      }
    } else {
      if (!sendDisabled) {
        // setSendDisabled(true);
      }
    }

    let roomUsers = null;
    let selectedRoom = null;
    chatkitUser.rooms.map((room, i) => {
      if (selectedThread === room.id) {
        roomUsers = room.userStore.users;
        selectedRoom = room;
      }
    });

    return (
      <section className="messenger">
        <div className="messengerContain">
          <MessengerUserSearch
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            setSendDisabled={setSendDisabled}
            selectedThread={selectedThread}
            chatkitUser={chatkitUser}
            roomUsers={roomUsers}
          />
          {emptyThread ? (
            <></>
          ) : (
            <MessengerHistory
              messages={messages}
              chatkitUser={chatkitUser}
              chatkitRoomId={selectedThread}
            />
          )}

          <MessengerReply
            send={sendMessageAndCreateRoom}
            sendDisabled={sendDisabled}
            selectedUser={selectedUser}
            room={selectedRoom}
            roomUsers={roomUsers}
          />
        </div>
      </section>
    );
  } else {
    return (
      <section className="emptyState">
        <img src="/public/img/uploadEmpty.svg" />
        <>
          <Text tagName="h1" className="headline">
            Message a User
          </Text>
          <Text tagName="h2" className="headline">
            Start a new thread to begin.
          </Text>
        </>
      </section>
    );
  }
};

export default Messenger;
