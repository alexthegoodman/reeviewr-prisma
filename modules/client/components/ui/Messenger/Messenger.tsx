import * as React from "react";

import { MessengerProps } from "./Messenger.d";
import MessengerUserSearch from "../MessengerUserSearch/MessengerUserSearch";
import MessengerReply from "../MessengerReply/MessengerReply";
import MessengerHistory from "../MessengerHistory/MessengerHistory";
import { Message } from "react-chat-ui";
import { Text, Callout } from "@blueprintjs/core";
import Legacy from "../../../../services/Legacy";

const Messenger: React.FC<MessengerProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  chatkitUser = null,
  selectedThread = null,
  emptyThread = false,
}) => {
  const legacy = new Legacy();

  const [messages, setMessages] = React.useState(null);
  const [sendDisabled, setSendDisabled] = React.useState(true);
  const [selectedUser, setSelectedUser] = React.useState(null);

  if (chatkitUser !== null && (selectedThread !== null || emptyThread)) {
    if (selectedThread !== null) {
      // fetch room messages
      chatkitUser
        .fetchMultipartMessages({
          roomId: selectedThread,
          initialId: 42,
          direction: "older",
          limit: 10,
        })
        .then(chatkitMessages => {
          setMessages(chatkitMessages);
        })
        .catch(err => {
          console.error(`Error fetching messages: ${err}`);
          // TODO: show error callout
        });
    }

    const sendMessage = (room, messageText) => {
      // send message
      chatkitUser
        .sendSimpleMessage({
          roomId: room.id,
          text: messageText,
        })
        .then(messageId => {
          console.log(`Added message to ${room.name}`);
        })
        .catch(err => {
          console.log(`Error adding message to ${room.name}: ${err}`);
        });
    };

    const sendMessageAndCreateRoom = (
      room = null,
      userIds = [],
      messageText = ""
    ) => {
      console.info("send", room, userIds, messageText);
      if (room === null) {
        // create private room
        chatkitUser
          .createRoom({
            name: "privateMessage",
            private: true,
            addUserIds: userIds,
          })
          .then(chatkitRoom => {
            console.log(`Created room called ${chatkitRoom.name}`);
            sendMessage(chatkitRoom, messageText);
          })
          .catch(err => {
            console.log(`Error creating room ${err}`);
          });
      } else {
        sendMessage(room, messageText);
      }
    };

    let selectedUserName = "";
    if (selectedUser != null) {
      let userMetaList = legacy.extractMultipleMeta(selectedUser.userMeta, [
        "userArtistName",
        "profileImage",
      ]);
      selectedUserName = userMetaList["userArtistName"];
      if (sendDisabled) {
        setSendDisabled(false);
      }
    } else {
      if (!sendDisabled) {
        setSendDisabled(true);
      }
    }

    return (
      <section className="messenger">
        <div className="messengerContain">
          <MessengerUserSearch
            setSelectedUser={setSelectedUser}
            setSendDisabled={setSendDisabled}
          />
          <MessengerHistory messages={messages} />
          <MessengerReply
            send={sendMessageAndCreateRoom}
            sendDisabled={sendDisabled}
            selectedUser={selectedUser}
          />
        </div>
      </section>
    );
  } else {
    return <Callout>Select a thread or start a new one</Callout>;
  }
};

export default Messenger;
