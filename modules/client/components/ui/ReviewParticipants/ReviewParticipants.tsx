import * as React from "react";

import { ReviewParticipantsProps } from "./ReviewParticipants.d";
import { Icon } from "@blueprintjs/core";
import { Image } from "cloudinary-react";
import Core from "../../../../services/Core";

const ReviewParticipants: React.FC<ReviewParticipantsProps> = ({
  ref = null,
  className = "",
  reviewerImageUrl = "",
  reviewerAltText = "",
  trackImageUrl = "",
  trackAltText = "",
  reviewerId = null,
  trackId = null,
}) => {
  const core = new Core();

  // const publicId = core.publicIdFromUrl(reviewerImageUrl);
  const reviewerPath = core.pathFromUrl(reviewerImageUrl);
  const trackPath = core.pathFromUrl(trackImageUrl);

  let reviewerImage = (
    <Image
      cloudName="hme3u9lwt"
      publicId={reviewerPath}
      width="150"
      crop="fill"
    />
  );
  if (typeof reviewerPath === "undefined") {
    reviewerImage = (
      <img
        src={reviewerImageUrl}
        alt={reviewerAltText}
        title={reviewerAltText}
      />
    );
  }

  let trackImage = (
    <Image cloudName="hme3u9lwt" publicId={trackPath} width="150" crop="fill" />
  );
  if (typeof trackPath === "undefined") {
    trackImage = (
      <img src={trackImageUrl} alt={trackAltText} title={trackAltText} />
    );
  }

  return (
    <section ref={ref} className={`reviewParticipants ${className}`}>
      <div className="left">
        {reviewerImage}

        {/* <span
          style={{
            color: "white",
            width: 70,
            wordWrap: "break-word",
            display: "block",
          }}
        >
          {reviewerId}
        </span> */}
      </div>
      <div className="center">
        <Icon icon="random" />
      </div>
      <div className="right">
        {trackImage}

        {/* <span
          style={{
            color: "white",
            width: 70,
            wordWrap: "break-word",
            display: "block",
          }}
        >
          {trackId}
        </span> */}
      </div>
    </section>
  );
};

export default ReviewParticipants;
