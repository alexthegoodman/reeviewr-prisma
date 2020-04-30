import * as React from "react";

import { PostInteractionProps } from "./PostInteraction.d";

const PostInteraction: React.FC<PostInteractionProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  children = null,
  header = null,
  ctrls = null,
}) => {
  const clickHandler = e => onClick(e);
  return (
    <section className="postInteraction">
      <div className="postInteractionContain">
        <div className="postInteractionHeader">{header}</div>
        <div className="postInteractionContent">{children}</div>
        <div className="postInteractionCtrls">{ctrls}</div>
      </div>
    </section>
  );
};

export default PostInteraction;
