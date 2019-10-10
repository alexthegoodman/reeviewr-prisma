import * as React from "react";

import { ThreadItemProps } from "./ThreadItem.d";
import { Link } from "react-navi";

const ThreadItem: React.FC<ThreadItemProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  thread = null,
}) => {
  const clickHandler = e => onClick(e);
  let content = null;
  let contentLink = null;
  return (
    <section className="threadItem">
      <div className="threadItemContain">
        <div className="visual">
          <img src="/public/img/mailchimp3-small.jpg" />
        </div>
        <div className="info">
          {content}
          <Link href={contentLink}>View Thread</Link>
        </div>
      </div>
    </section>
  );
};

export default ThreadItem;
