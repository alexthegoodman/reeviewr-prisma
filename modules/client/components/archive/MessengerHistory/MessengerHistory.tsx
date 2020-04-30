import * as React from "react";

import { MessengerHistoryProps } from "./MessengerHistory.d";
import { Text } from "@blueprintjs/core";
import { ChatFeed, Message } from "react-chat-ui";
import Legacy from "../../../../services/Legacy";
import Utility from "../../../../services/Utility";

const MessengerHistory: React.FC<MessengerHistoryProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  messages = null,
  chatkitUser = null,
  chatkitRoomId = null,
}) => {
  const legacy = new Legacy();
  const utility = new Utility();

  const clickHandler = e => onClick(e);

  // subscribe to room
  // TODO: avoiid resubscription

  const isTyping = false;

  if (messages !== null) {
    let messageArr = new Array();

    messages.forEach(message => {
      const id = message.senderId;
      let name = "";
      for (let key in message.userStore.users) {
        if (message.userStore.users[key].id === message.senderId) {
          name = message.userStore.users[key].name;
        }
      }
      // console.info("message", message, id, name);
      messageArr[messageArr.length] = new Message({
        id: message.senderId,
        senderName: name,
        message: message.parts[0].payload.content,
      });
    });

    return (
      <>
        <ChatFeed
          messages={messageArr} // Boolean: list of message objects
          isTyping={isTyping} // Boolean: is the recipient typing
          hasInputField={false} // Boolean: use our input, or use your own
          showSenderName={true} // show the name of the user who sent the message
          bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
          // JSON: Custom bubble styles
          bubbleStyles={{
            text: {
              fontSize: 15,
            },
            chatbubble: {
              borderRadius: 50,
              padding: 10,
            },
          }}
        />
      </>
    );
  } else {
    return (
      <>
        <Text>No Chat History - Must Start Chat</Text>
      </>
    );
  }
};

export default MessengerHistory;
