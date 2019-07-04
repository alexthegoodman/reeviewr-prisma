import * as React from "react";

import { MessengerProps } from "./Messenger.d";
import MessengerUserSearch from "../MessengerUserSearch/MessengerUserSearch";
import MessengerReply from "../MessengerReply/MessengerReply";
import MessengerHistory from "../MessengerHistory/MessengerHistory";
import { Message } from "react-chat-ui";
import { Text, Callout } from "@blueprintjs/core";

const Messenger: React.FC<MessengerProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  chatkitUser = null,
  selectedThread = null,
  emptyThread = false,
}) => {
  const clickHandler = e => onClick(e);

  const [messages, setMessages] = React.useState(null);
  const [sendDisabled, setSendDisabled] = React.useState(true);

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

    const sendMessage = room => {
      // send message
      chatkitUser
        .sendSimpleMessage({
          roomId: room.id,
          text: "Hi there!",
        })
        .then(messageId => {
          console.log(`Added message to ${room.name}`);
        })
        .catch(err => {
          console.log(`Error adding message to ${room.name}: ${err}`);
        });
    };

    const sendMessageAndCreateRoom = (room = null) => {
      if (room === null) {
        // create private room
        chatkitUser
          .createRoom({
            name: "general",
            private: true,
            addUserIds: ["craig", "kate"],
            customData: { foo: 42 },
          })
          .then(chatkitRoom => {
            console.log(`Created room called ${chatkitRoom.name}`);
            sendMessage(chatkitRoom);
          })
          .catch(err => {
            console.log(`Error creating room ${err}`);
          });
      } else {
        sendMessage(room);
      }
    };

    return (
      <section className="messenger">
        <div className="messengerContain">
          <MessengerUserSearch setSendDisabled={setSendDisabled} />
          <MessengerHistory messages={messages} />
          <MessengerReply
            send={sendMessageAndCreateRoom}
            sendDisabled={sendDisabled}
          />
        </div>
      </section>
    );
  } else {
    return <Callout>Select a thread or start a new one</Callout>;
  }
};

export default Messenger;
