import * as React from "react";

import { MessageMenuProps } from "./MessageMenu.d";
import { Button } from "@blueprintjs/core";
import { useNavigation } from "react-navi";
import ThreadItem from "../../ui/ThreadItem/ThreadItem";

const MessageMenu: React.FC<MessageMenuProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  threadsData = null,
}) => {
  const clickHandler = e => onClick(e);
  const navigation = useNavigation();

  return (
    <section className="messagesMenu">
      <div className="messageMenuContain">
        {typeof threadsData.findManyThread !== "undefined" ? (
          threadsData.findManyThread.map((thread, i) => {
            return <ThreadItem key={i} thread={thread} />;
          })
        ) : (
          <></>
        )}
        <Button
          className="dropdownMenuButton"
          onClick={() => navigation.navigate("/messages/")}
        >
          View all Messages
        </Button>
      </div>
    </section>
  );
};

export default MessageMenu;
