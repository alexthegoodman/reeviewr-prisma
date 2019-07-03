import * as React from "react";

import { MessagesProps } from "./Messages.d";

import { ChatManager, TokenProvider } from "@pusher/chatkit-client";
import { useCookies } from "react-cookie";
import { useAppContext } from "../../../context";
import MessageThreads from "../../ui/MessageThreads/MessageThreads";
import Messenger from "../../ui/Messenger/Messenger";

const Messages: React.FC<MessagesProps> = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "reeviewrPrivateHash",
  ]);

  const [{ tour, userData }, dispatch] = useAppContext();
  const [chatkitUser, setChatkitUser] = React.useState(null);
  const [selectedThread, setSelectedThread] = React.useState(null);

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

        // set currentUser in context?

        // create private room
        // currentUser.createRoom({
        //   name: 'general',
        //   private: true,
        //   addUserIds: ['craig', 'kate'],
        //   customData: { foo: 42 },
        // }).then(room => {
        //   console.log(`Created room called ${room.name}`)
        // })
        // .catch(err => {
        //   console.log(`Error creating room ${err}`)
        // })

        // fetch room messages
        // currentUser.fetchMultipartMessages({
        //   roomId: someRoomId,
        //   initialId: 42,
        //   direction: 'older',
        //   limit: 10,
        // })
        //   .then(messages => {
        //     // do something with the messages
        //   })
        //   .catch(err => {
        //     console.log(`Error fetching messages: ${err}`)
        //   })

        // subscribe to room
        // currentUser.subscribeToRoomMultipart({
        //   roomId: someRoomId,
        //   hooks: {
        //     onMessage: message => {
        //       console.log("received message", message)
        //     }
        //   },
        //   messageLimit: 10
        // })

        // send message
        // currentUser.sendSimpleMessage({
        //   roomId: myRoom.id,
        //   text: "Hi there!",
        // })
        // .then(messageId => {
        //   console.log(`Added message to ${myRoom.name}`)
        // })
        // .catch(err => {
        //   console.log(`Error adding message to ${myRoom.name}: ${err}`)
        // })

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

  return (
    <>
      <MessageThreads
        chatkitUser={chatkitUser}
        onSelectThread={setSelectedThread}
      />
      <Messenger chatkitUser={chatkitUser} selectedThread={selectedThread} />
    </>
  );
};

export default Messages;
