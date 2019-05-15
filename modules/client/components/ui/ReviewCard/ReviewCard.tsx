import * as React from "react";

import { ReviewCardProps } from "./ReviewCard.d";
import { Card, Text } from "@blueprintjs/core";
import ReviewParticipants from "../ReviewParticipants/ReviewParticipants";
import truncate from "truncate";
import Strings from "../../../services/Strings";
import Utility from "../../../../services/Utility";
import useInterval from "react-useinterval";
import { CSSTransition } from "react-transition-group";

const ReviewCard: React.FC<ReviewCardProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  artistTitle = "",
  reviewMetaList = {},
  reviewerImageUrl = "",
  reviewerAltText = "",
  reviewerId = null,
  trackImageUrl = "",
  trackAltText = "",
  trackId = null,
}) => {
  const utility = new Utility();
  const strings = new Strings();
  const clickHandler = e => onClick(e);
  const [answer, setAnswer] = React.useState(1);

  const increaseCount = () => {
    let newAnswer = answer + 1 === 4 ? 1 : answer + 1;
    setAnswer(newAnswer);
  };

  // TODO: consider animation in left-to-right wave rather than random
  useInterval(increaseCount, Math.random() * 10000, null);

  artistTitle = strings.decode(artistTitle);
  const answer1 = truncate(
    strings.decode(reviewMetaList["questionAnswer1"]),
    100
  );
  const answer2 = truncate(
    strings.decode(reviewMetaList["questionAnswer2"]),
    100
  );
  const answer3 = truncate(
    strings.decode(reviewMetaList["questionAnswer3"]),
    100
  );

  return (
    <Card
      ref={ref}
      className={`reviewCard ${className}`}
      onClick={clickHandler}
    >
      <ReviewParticipants
        reviewerImageUrl={reviewerImageUrl}
        reviewerAltText={reviewerAltText}
        reviewerId={reviewerId}
        trackImageUrl={trackImageUrl}
        trackAltText={trackAltText}
        trackId={trackId}
      />
      <div className="cardInfo">
        <Text tagName="h5">{artistTitle}</Text>
        {/* <Text tagName="p">Review #4</Text> */}
        <CSSTransition
          in={answer === 1 ? true : false}
          timeout={500}
          classNames="reviewAnswer"
        >
          <Text tagName="p">{answer1}</Text>
        </CSSTransition>
        <CSSTransition
          in={answer === 2 ? true : false}
          timeout={500}
          classNames="reviewAnswer"
        >
          <Text tagName="p">{answer2}</Text>
        </CSSTransition>
        <CSSTransition
          in={answer === 3 ? true : false}
          timeout={500}
          classNames="reviewAnswer"
        >
          <Text tagName="p">{answer3}</Text>
        </CSSTransition>
      </div>
    </Card>
  );
};

export default ReviewCard;
