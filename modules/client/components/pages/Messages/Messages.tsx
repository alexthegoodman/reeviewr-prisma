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

  const [{ userData }, dispatch] = useAppContext();
  const [chatkitUser, setChatkitUser] = React.useState(null);
  const [selectedThread, setSelectedThread] = React.useState(null);
  const [emptyThread, setEmptyThead] = React.useState(false);

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

  console.info("checking here");
  return (
    <section className="messages">
      <MessageThreads
        chatkitUser={chatkitUser}
        onSelectThread={setSelectedThread}
        setEmptyThead={setEmptyThead}
        selectedThread={selectedThread}
      />
      <Messenger
        chatkitUser={chatkitUser}
        selectedThread={selectedThread}
        emptyThread={emptyThread}
      />
    </section>
  );
};

export default Messages;
