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
    let newAnswer = answer + 1 === 4 ? 1 : answer + 1;
    setAnswer(newAnswer);
  };

  // TODO: consider animation in left-to-right wave rather than random
  useInterval(increaseCount, Math.random() * 10000, null);

  artistTitle = strings.decode(artistTitle);

  const decodeTruncate = text => truncate(strings.decode(text), 100);

  const answer1 =
    reviewMetaList["questionType1"] === "rating" ? (
      <>
        <Text>{decodeTruncate(trackMetaList["questionContent1"])}</Text>
        <span className="ratingNum">
          {decodeTruncate(reviewMetaList["questionAnswer1"])}/10
        </span>
        <Text>{decodeTruncate(trackMetaList["questionOne1"])}</Text>
      </>
    ) : (
      decodeTruncate(reviewMetaList["questionAnswer1"])
    );

  const answer2 =
    reviewMetaList["questionType2"] === "rating" ? (
      <>
        <Text>{decodeTruncate(trackMetaList["questionContent2"])}</Text>
        <span className="ratingNum">
          {decodeTruncate(reviewMetaList["questionAnswer2"])}/10
        </span>
        <Text>{decodeTruncate(trackMetaList["questionOne2"])}</Text>
      </>
    ) : (
      decodeTruncate(reviewMetaList["questionAnswer2"])
    );

  const answer3 =
    reviewMetaList["questionType3"] === "rating" ? (
      <>
        <Text>{decodeTruncate(trackMetaList["questionContent3"])}</Text>
        <span className="ratingNum">
          {decodeTruncate(reviewMetaList["questionAnswer3"])}/10
        </span>
        <Text>{decodeTruncate(trackMetaList["questionOne3"])}</Text>
      </>
    ) : (
      decodeTruncate(reviewMetaList["questionAnswer3"])
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
        {[1, 2, 3].map(node => {
          let answerContent = <></>;
          console.info("node", node, reviewMetaList[`questionType${node}`]);
          switch (reviewMetaList[`questionType${node}`]) {
            case "rating":
              answerContent = (
                <div className="rating">
                  <Text className="ratingText leftText">
                    {decodeTruncate(trackMetaList[`questionContent${node}`])}
                  </Text>
                  <Tag className="ratingNum" round={true}>
                    {decodeTruncate(reviewMetaList[`questionAnswer${node}`])}/10
                  </Tag>
                  <Text className="ratingText rightText">
                    {decodeTruncate(trackMetaList[`questionOne${node}`])}
                  </Text>
                </div>
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
              answerContent = (
                <div className="mult_choice">
                  <Text>
                    {decodeTruncate(trackMetaList[`questionContent${node}`])}
                  </Text>
                  <Tag className="multChoiceChosen" round={true}>
                    {answerData}
                  </Tag>
                </div>
              );
              break;

            case "written_response":
              answerContent = (
                <div className="written_response">
                  <Text>
                    {decodeTruncate(reviewMetaList[`questionAnswer${node}`])}
                  </Text>
                </div>
              );
              break;
          }

          return (
            <CSSTransition
              in={answer === node ? true : false}
              timeout={500}
              classNames="reviewAnswer"
            >
              <Text tagName="p">{answerContent}</Text>
            </CSSTransition>
          );
        })}
      </div>
    </Card>
  );
};

export default ReviewCard;
