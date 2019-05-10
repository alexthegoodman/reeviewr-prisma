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
}) => {
  const clickHandler = e => onClick(e);

  switch (questionType) {
    case "essay":
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
    case "multChoice":
      return (
        <>
          <RadioField
            fieldName={`questionAnswer${questionNumber}`}
            options={[]}
          />
        </>
      );
      break;
  }

  return <Text tagName="span">Please select a question type</Text>;
};

export default AnswerQuestion;
