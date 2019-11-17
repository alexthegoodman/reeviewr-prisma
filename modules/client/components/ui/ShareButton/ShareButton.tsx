import * as React from "react";

import { Button, Icon, Popover, Text } from "@blueprintjs/core";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TumblrShareButton,
  TwitterShareButton,
} from "react-share";
import { ShareButtonProps } from "./ShareButton.d";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TumblrIcon,
  TwitterIcon,
} from "react-share";

const ShareButton: React.FC<ShareButtonProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  url = "",
}) => {
  const clickHandler = e => onClick(e);

  return (
    <Popover>
      <Button
        ref={ref}
        className={`trackButton shareButton ${className}`}
        onClick={clickHandler}
        icon="share"
      >
        Share
      </Button>
      <div className="shareMenu">
        <FacebookShareButton
          url={url}
          quote={`Check out this track on Reeviewr`}
        >
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
    </Popover>
  );
};

export default ShareButton;
