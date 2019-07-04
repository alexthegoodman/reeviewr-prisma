import * as React from "react";

import { MessageThreadsProps } from "./MessageThreads.d";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import { Button } from "@blueprintjs/core";

const MessageThreads: React.FC<MessageThreadsProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  chatkitUser = null,
  onSelectThread = () => console.info("Select Thread"),
}) => {
  if (chatkitUser !== null) {
    return (
      <section className="messageThreads">
        <Button className="actionButton">Start Thread</Button>
        <div className="thread">
          <div className="threadContain">
            <div className="avatars">
              <div className="avatar avatar1">
                <img src="" alt="" title="" />
              </div>
              <div className="avatar avatar2">
                <img src="" alt="" title="" />
              </div>
            </div>
            <div className="members">
              <span className="member member1">Username 1</span>
              <span className="member member2">Username 2</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return <LoadingIndicator loadingText="Loading threads..." />;
};

export default MessageThreads;
