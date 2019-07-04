import * as React from "react";

import { MessengerProps } from "./Messenger.d";
import MessengerUserSearch from "../MessengerUserSearch/MessengerUserSearch";
import MessengerReply from "../MessengerReply/MessengerReply";
import MessengerHistory from "../MessengerHistory/MessengerHistory";
import { Message } from "react-chat-ui";

const Messenger: React.FC<MessengerProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  chatkitUser = null,
  selectedThread = null,
}) => {
  const clickHandler = e => onClick(e);
  console.info("messenger", chatkitUser);
  return (
    <section className="messenger">
      <div className="messengerContain">
        <MessengerUserSearch />
        <MessengerHistory messages={null} />
        <MessengerReply />
      </div>
    </section>
  );
};

export default Messenger;
