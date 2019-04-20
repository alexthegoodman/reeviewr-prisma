import * as React from "react";

import { ReviewCardProps } from "./ReviewCard.d";
import { Card, Text } from "@blueprintjs/core";
import ReviewParticipants from "../ReviewParticipants/ReviewParticipants";
import truncate from "truncate";
import Strings from "../../../services/Strings";

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
  const strings = new Strings();
  const clickHandler = e => onClick(e);

  console.info("artist title", artistTitle);
  artistTitle = strings.decode(artistTitle);
  answerPreview = truncate(strings.decode(answerPreview), 100);

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
