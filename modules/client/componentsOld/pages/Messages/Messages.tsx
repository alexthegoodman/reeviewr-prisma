import * as React from "react";

import { MessagesProps } from "./Messages.d";

import { Text } from "@blueprintjs/core";
import { ChatManager, TokenProvider } from "@pusher/chatkit-client";
import * as _ from "lodash";
import { useCookies } from "react-cookie";
import { useAppContext } from "../../../context";
import LoadingIndicator from "../../ui/LoadingIndicator/LoadingIndicator";
import MessageThreads from "../../ui/MessageThreads/MessageThreads";
import Messenger from "../../ui/Messenger/Messenger";

const Messages: React.FC<MessagesProps> = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "reeviewrId",
  ]);

  const [{ userData }, dispatch] = useAppContext();
  const [chatkitUser, setChatkitUser] = React.useState(null);
  const [selectedThread, setSelectedThread] = React.useState(null);
  const [emptyThread, setEmptyThead] = React.useState(false);
  const [messages, setMessages] = React.useState(null);
  const [sendDisabled, setSendDisabled] = React.useState(true);
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [allRoomsSubscribed, setAllRoomsSubscribed] = React.useState(false);

  const chatManager = new ChatManager({
    instanceLocator: "v1:us1:a9fd4cf4-b88b-401e-8c9a-019b95bccfa8",
    userId: userData.user.id,
    // TODO: do not use their url in production
    tokenProvider: new TokenProvider({
      url:
        "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a9fd4cf4-b88b-401e-8c9a-019b95bccfa8/token",
    }),
  });

  if (chatkitUser === null) {
    chatManager
      .connect({
        onAddedToRoom: room => {
          console.log(`Added to room ${room.name}`);
        },
      })
      .then(currentUser => {
        console.log(
          "Successful connection",
          currentUser,
          currentUser.users,
          currentUser.rooms
        );

        setChatkitUser(currentUser);

        // typing indiciator
        //     currentUser.isTypingIn({ roomId: someRoomId })
        // .then(() => {
        //   console.log('Success!')
        // })
        // .catch(err => {
        //   console.log(`Error sending typing indicator: ${err}`)
        // })

        // enable push notifications
        currentUser
          .enablePushNotifications()
          .then(() => {
            console.log("Push Notifications enabled");
          })
          .catch(error => {
            console.error("Push Notifications error:", error);
          });
      })
      .catch(err => {
        console.log("Error on connection", err);
      });
  }

  if (chatkitUser !== null) {
    let i = 0;
    if (Object.keys(chatkitUser.rooms).length > 0) {
      for (const key in chatkitUser.rooms) {
        if (chatkitUser.rooms.hasOwnProperty(key)) {
          const id = chatkitUser.rooms[key].id;
          chatkitUser
            .subscribeToRoomMultipart({
              roomId: id,
              hooks: {
                onMessage: message => {
                  updateMessages();
                },
              },
              messageLimit: 10,
            })
            .then(() => {
              i++;
              if (i === Object.keys(chatkitUser.rooms).length) {
                setAllRoomsSubscribed(true);
              }
            });
        }
      }
    } else {
      if (!allRoomsSubscribed) {
        setAllRoomsSubscribed(true);
      }
    }
  }

  const updateMessages = () => {
    // fetch room messages
    if (selectedThread !== null) {
      chatkitUser
        .fetchMultipartMessages({
          roomId: selectedThread,
          // initialId: 42,
          direction: "older",
          limit: 10,
        })
        .then(chatkitMessages => {
          if (!_.isEqual(chatkitMessages, messages)) {
            setSendDisabled(false);
            setMessages(chatkitMessages);
          }
        })
        .catch(err => {
          console.error(`Error fetching messages: ${err}`);
          // TODO: show error callout
        });
    } else {
      console.error("Must have a selectedThread to get messages");
    }
  };

  console.info("checking here", allRoomsSubscribed);
  return (
    <section className="messages">
      {!allRoomsSubscribed ? (
        <LoadingIndicator loadingText="Subscribing..." />
      ) : (
          <>
            <MessageThreads
              chatkitUser={chatkitUser}
              onSelectThread={setSelectedThread}
              setEmptyThead={setEmptyThead}
              setSelectedThread={setSelectedThread}
              selectedThread={selectedThread}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
              setSendDisabled={setSendDisabled}
              allRoomsSubscribed={allRoomsSubscribed}
              setAllRoomsSubscribed={setAllRoomsSubscribed}
            />
            <Messenger
              chatkitUser={chatkitUser}
              selectedThread={selectedThread}
              emptyThread={emptyThread}
              selectedUser={selectedUser}
              sendDisabled={sendDisabled}
              setSendDisabled={setSendDisabled}
              setSelectedUser={setSelectedUser}
              messages={messages}
              setMessages={setMessages}
              allRoomsSubscribed={allRoomsSubscribed}
              setAllRoomsSubscribed={setAllRoomsSubscribed}
              updateMessages={updateMessages}
            />
          </>
        )}
    </section>
  );
};

export default Messages;
