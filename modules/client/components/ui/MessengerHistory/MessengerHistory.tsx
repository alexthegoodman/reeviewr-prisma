import * as React from "react";

import { MessengerHistoryProps } from "./MessengerHistory.d";
import { Text } from "@blueprintjs/core";
import { ChatFeed, Message } from "react-chat-ui";

const MessengerHistory: React.FC<MessengerHistoryProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  messages = null,
}) => {
  const clickHandler = e => onClick(e);
  const isTyping = false;
  if (messages !== null) {
    return (
      <ChatFeed
        messages={messages} // Boolean: list of message objects
        isTyping={isTyping} // Boolean: is the recipient typing
        hasInputField={false} // Boolean: use our input, or use your own
        showSenderName // show the name of the user who sent the message
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
