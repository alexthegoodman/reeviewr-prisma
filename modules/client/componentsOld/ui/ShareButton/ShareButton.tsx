import * as React from "react";

import { ShareButtonProps } from "./ShareButton.d";
import { Button, Text, Icon } from "@blueprintjs/core";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  TumblrShareButton,
  EmailShareButton,
} from "react-share";

import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  TumblrIcon,
  EmailIcon,
} from "react-share";

const ShareButton: React.FC<ShareButtonProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  url = "",
}) => {
  const clickHandler = e => onClick(e);

  return (
    <div className="shareButton">
      <FacebookShareButton url={url} quote={`Check out this track on Reeviewr`}>
        <FacebookIcon round={true} size={32} />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title="Check out this track on Reeviewr"
        via=""
      >
        <TwitterIcon round={true} size={32} />
      </TwitterShareButton>
      <EmailShareButton
        url={url}
        subject="Check out this track on Reeviewr"
        body=""
      >
        <EmailIcon round={true} size={32} />
      </EmailShareButton>
    </div>
  );
  // return (
  //   <Button
  //     ref={ref}
  //     className={`trackButton shareButton ${className}`}
  //     onClick={clickHandler}
  //   >
  //     <Text tagName="span">
  //       <Icon icon="share" />Share
  //     </Text>
  //   </Button>
  // );
};

export default ShareButton;
