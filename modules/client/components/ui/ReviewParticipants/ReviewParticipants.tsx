import * as React from "react";

import { ReviewParticipantsProps } from "./ReviewParticipants.d";
import { Icon } from "@blueprintjs/core";

const ReviewParticipants: React.FC<ReviewParticipantsProps> = ({
  ref = null,
  className = "",
  reviewerImageUrl = "",
  reviewerAltText = "",
  trackImageUrl = "",
  trackAltText = "",
}) => {
  return (
    <section ref={ref} className={`reviewParticipants ${className}`}>
      <div className="left">
        <img
          src={reviewerImageUrl}
          alt={reviewerAltText}
          title={reviewerAltText}
        />
      </div>
      <div className="center">
        <Icon icon="random" />
      </div>
      <div className="right">
        <img src={trackImageUrl} alt={trackAltText} title={trackAltText} />
      </div>
    </section>
  );
};

export default ReviewParticipants;
