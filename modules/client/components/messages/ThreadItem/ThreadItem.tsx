import * as React from "react";

import { Text } from "@blueprintjs/core";
import { ThreadItemProps } from "./ThreadItem.d";
import { Link } from "react-navi";
import Legacy from "../../../../services/Legacy";

const ThreadItem: React.FC<ThreadItemProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  thread = null,
}) => {
  const legacy = new Legacy();
  const clickHandler = e => onClick(e);
  let content = null;
  let contentLink = null;

  const messageSnippet = legacy.extractMetaValue(
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
