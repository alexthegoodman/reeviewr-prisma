import * as React from "react";

import { Text } from "@blueprintjs/core";
import { ThreadItemProps } from "./ThreadItem.d";
import { Link } from "react-navi";
import DataHandler from "../../../../services/DataHandler";

const ThreadItem: React.FC<ThreadItemProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  thread = null,
}) => {
  const dataHandler = new DataHandler();
  const clickHandler = (e) => onClick(e);
  let content = null;
  let contentLink = null;

  const messageSnippet = dataHandler.extractMetaValue(
    thread.messages[0].itemMeta,
    "content"
  );

  return (
    <section className="threadItem">
      <div className="threadItemContain">
        <div className="visual">
          <img src="/public/img/mailchimp3-small.jpg" />
        </div>
        <div className="info">
          <div>
            <Text tagName="span" className="infoTitle">
              {thread.participants[0].userEmail}
            </Text>
            <Text tagName="span" className="infoTitle">
              and
            </Text>
            <Text tagName="span" className="infoTitle">
              {thread.participants[1].userEmail}
            </Text>
          </div>
          <div>
            <Text tagName="p">{messageSnippet}</Text>
          </div>
          <Link href={contentLink}>View Thread</Link>
        </div>
      </div>
    </section>
  );
};

export default ThreadItem;
