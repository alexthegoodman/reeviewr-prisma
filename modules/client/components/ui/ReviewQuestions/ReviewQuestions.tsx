import * as React from "react";

import { ReviewQuestionsProps } from "./ReviewQuestions.d";
import Hawaii from "../../../services/Hawaii";

const ReviewQuestions: React.FC<ReviewQuestionsProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  questions = [],
}) => {
  const hawaii = new Hawaii();
  const clickHandler = e => onClick(e);

  return (
    <div className="reviewQuestions">
      <div className="reviewQuestionsContain">
        {questions.map((question, i) => {
          return (
            <a
              key={i}
              href="#!"
              className={`reviewQuestionItem ${i === 1 ? "selected" : ""}`}
            >
              <span className="counter">{i + 1}</span>
              <span className="itemQuestion">
                {hawaii.stringHandler.lorem.generateWords(7)}?
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewQuestions;
