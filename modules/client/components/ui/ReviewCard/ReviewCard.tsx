import * as React from "react";

import { ReviewCardProps } from "./ReviewCard.d";
import { Card, Text, Tag } from "@blueprintjs/core";
import ReviewParticipants from "../ReviewParticipants/ReviewParticipants";
import truncate from "truncate";
import Strings from "../../../services/Strings";
import Utility from "../../../../services/Utility";
import useInterval from "react-useinterval";
import { CSSTransition } from "react-transition-group";

const ReviewCard: React.FC<ReviewCardProps> = ({
  ref = null,
  node = 0,
  className = "",
  onClick = e => console.info("Click"),
  artistTitle = "",
  trackMetaList = {},
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
    setTimeout(() => {
      let newAnswer = answer + 1 === 4 ? 1 : answer + 1;
      setAnswer(newAnswer);
    }, 2000 * node);
  };

  const waitTime = 8000;

  // TODO: consider animation in left-to-right wave rather than random
  useInterval(increaseCount, waitTime, null);

  artistTitle = strings.decode(artistTitle);

  const decodeTruncate = text => truncate(strings.decode(text), 100);

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
        {[1, 2, 3].map(node => {
          let answerContent = <></>;
          console.info("node", node, reviewMetaList[`questionType${node}`]);
          switch (reviewMetaList[`questionType${node}`]) {
            case "rating":
              let rating = decodeTruncate(
                reviewMetaList[`questionAnswer${node}`]
              );
              let fullRating = `${rating}/10`;
              if (rating === "") {
                fullRating = "No Answer";
              }

              answerContent = (
                <span className="rating">
                  <Text tagName="p" className="ratingText leftText">
                    {decodeTruncate(trackMetaList[`questionContent${node}`])}
                  </Text>
                  <Tag className="ratingNum" round={true}>
                    {fullRating}
                  </Tag>
                  <Text tagName="p" className="ratingText rightText">
                    {decodeTruncate(trackMetaList[`questionOne${node}`])}
                  </Text>
                </span>
              );
              break;

            case "mult_choice":
              const answerChoice = parseInt(
                decodeTruncate(reviewMetaList[`questionAnswer${node}`])
              );

              let answerData;
              if (answerChoice === 1) {
                answerData = decodeTruncate(
                  trackMetaList[`questionOne${node}`]
                );
              } else if (answerChoice === 2) {
                answerData = decodeTruncate(
                  trackMetaList[`questionTwo${node}`]
                );
              } else if (answerChoice === 3) {
                answerData = decodeTruncate(
                  trackMetaList[`questionThree${node}`]
                );
              } else if (answerChoice === 4) {
                answerData = decodeTruncate(
                  trackMetaList[`questionFour${node}`]
                );
              }

              if (answerData === "") {
                answerData = "No Answer";
              }

              answerContent = (
                <span className="mult_choice">
                  <Text tagName="p">
                    {decodeTruncate(trackMetaList[`questionContent${node}`])}
                  </Text>
                  <Tag className="multChoiceChosen" round={true}>
                    {answerData}
                  </Tag>
                </span>
              );
              break;

            case "written_response":
              let answer = decodeTruncate(
                reviewMetaList[`questionAnswer${node}`]
              );
              if (answer === "") {
                answer = "No Answer";
              }
              answerContent = (
                <span className="written_response">
                  <Text tagName="p">{answer}</Text>
                </span>
              );
              break;

            default:
              answerContent = (
                <span className="noAnswer">
                  <Text tagName="p">No Answer</Text>
                </span>
              );
              break;
          }

          return (
            <CSSTransition
              key={node}
              in={answer === node ? true : false}
              timeout={500}
              classNames="reviewAnswer"
            >
              <div className="answerContent">{answerContent}</div>
            </CSSTransition>
          );
        })}
      </div>
    </Card>
  );
};

export default ReviewCard;
