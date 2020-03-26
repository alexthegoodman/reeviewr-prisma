import * as React from "react";

import { PostDetailCtrlsProps } from "./PostDetailCtrls.d";
import LikeButton from "../LikeButton/LikeButton";
import ShareButton from "../ShareButton/ShareButton";

const PostDetailCtrls: React.FC<PostDetailCtrlsProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <>
      <div className="postCtrls">
        <div className="ctrlsContain">
          <LikeButton trackOldId="" />
          <ShareButton url="" />
        </div>
      </div>
    </>
  );
};

export default PostDetailCtrls;
