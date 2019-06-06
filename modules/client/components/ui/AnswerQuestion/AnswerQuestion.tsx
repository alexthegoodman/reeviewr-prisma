import * as React from "react";

import { AnswerQuestionProps } from "./AnswerQuestion.d";
import { Text } from "@blueprintjs/core";
import TextareaField from "../TextareaField/TextareaField";
import RadioField from "../RadioField/RadioField";
import SliderField from "../SliderField/SliderField";

const AnswerQuestion: React.FC<AnswerQuestionProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  questionNumber = "",
  questionType = "",
  options = null,
}) => {
  const clickHandler = e => onClick(e);

  switch (questionType) {
    case "written_response":
      return (
        <>
          <TextareaField fieldName={`questionAnswer${questionNumber}`} />
        </>
      );
      break;
    case "rating":
      return (
        <>
          <SliderField fieldName={`questionAnswer${questionNumber}`} />
        </>
      );
      break;
    case "mult_choice":
      return (
        <>
          <RadioField
            fieldName={`questionAnswer${questionNumber}`}
            options={options}
          />
        </>
      );
      break;
    default:
      return <Text tagName="span">No question type provided</Text>;
      break;
  }
};

export default AnswerQuestion;
