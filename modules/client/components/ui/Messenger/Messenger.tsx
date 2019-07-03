import * as React from "react";

import { MessengerProps } from "./Messenger.d";
import MessengerUserSearch from "../MessengerUserSearch/MessengerUserSearch";
import MessengerReply from "../MessengerReply/MessengerReply";
import MessengerHistory from "../MessengerHistory/MessengerHistory";

const Messenger: React.FC<MessengerProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <section className="messenger">
      <div className="messengerContain">
        <MessengerUserSearch />
        <MessengerHistory />
        <MessengerReply />
      </div>
    </section>
  );
};

export default Messenger;
