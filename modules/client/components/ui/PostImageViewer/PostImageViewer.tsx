import * as React from "react";

import { PostImageViewerProps } from "./PostImageViewer.d";

const PostImageViewer: React.FC<PostImageViewerProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  ctrls = <></>,
}) => {
  const clickHandler = e => onClick(e);
  return (
    <section className="postImageViewer">
      <div className="postImageViewerContain">
        <div className="focusContent">
          <img src="/public/img/mailchimp2-small.jpg" alt="" title="" />
        </div>
        <div className="secondaryContent">
          <div className="ctrls">{ctrls}</div>
          <div className="photoStrip">
            {/** TODO: Limit on # of photos uploaded */}
            <img src="/public/img/mailchimp3-small.jpg" alt="" title="" />
            <img src="/public/img/mailchimp4-small.jpg" alt="" title="" />
            <img src="/public/img/mailchimp5-small.jpg" alt="" title="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostImageViewer;
