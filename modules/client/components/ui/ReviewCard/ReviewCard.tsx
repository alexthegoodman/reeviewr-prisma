import * as React from "react";

import { ReviewCardProps } from "./ReviewCard.d";
import { Card, Text } from "@blueprintjs/core";
import ReviewParticipants from "../ReviewParticipants/ReviewParticipants";
import truncate from "truncate";

const ReviewCard: React.FC<ReviewCardProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  artistTitle = "",
  answerPreview = "",
  reviewerImageUrl = "",
  reviewerAltText = "",
  trackImageUrl = "",
  trackAltText = "",
}) => {
  const clickHandler = e => onClick(e);
  answerPreview = truncate(answerPreview, 100);
  return (
    <Card
      ref={ref}
      className={`reviewCard ${className}`}
      onClick={clickHandler}
    >
      <ReviewParticipants
        reviewerImageUrl={reviewerImageUrl}
        reviewerAltText={reviewerAltText}
        trackImageUrl={trackImageUrl}
        trackAltText={trackAltText}
      />
      <div className="cardInfo">
        <Text tagName="h5">{artistTitle}</Text>
        {/* <Text tagName="p">Review #4</Text> */}
        <Text tagName="p">{answerPreview}</Text>
      </div>
    </Card>
  );
};

export default ReviewCard;
