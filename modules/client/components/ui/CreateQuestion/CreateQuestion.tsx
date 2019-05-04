import * as React from "react";

import { CreateQuestionProps } from "./CreateQuestion.d";
import TextField from "../TextField/TextField";
import { Text } from "@blueprintjs/core";

const CreateQuestion: React.FC<CreateQuestionProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  questionNumber = "",
  questionType = "",
}) => {
  const clickHandler = e => onClick(e);

  switch (questionType) {
    case "Essay":
      return (
        <>
          <TextField
            label="Essay Question"
            fieldName={`questionContent${questionNumber}`}
            fieldPlaceholder="Enter the essay question"
            fieldType="text"
          />
        </>
      );
      break;
    case "Rating":
      return (
        <>
          <TextField
            label="1 Label"
            fieldName={`questionContent${questionNumber}`}
            fieldPlaceholder="Enter the left side label"
            fieldType="text"
          />

          <TextField
            label="10 Label"
            fieldName={`questionOne${questionNumber}`}
            fieldPlaceholder="Enter the right side label"
            fieldType="text"
          />
        </>
      );
      break;
    case "Multiple Choice":
      return (
        <>
          <TextField
            label="Multiple Choice Question"
            fieldName={`questionContent${questionNumber}`}
            fieldPlaceholder="Enter the mutliple choice question"
            fieldType="text"
          />

          <TextField
            label="A"
            fieldName={`questionOne${questionNumber}`}
            fieldPlaceholder="Enter the A answer"
            fieldType="text"
          />
          <TextField
            label="B"
            fieldName={`questionTwo${questionNumber}`}
            fieldPlaceholder="Enter the B answer"
            fieldType="text"
          />
          <TextField
            label="C"
            fieldName={`questionThree${questionNumber}`}
            fieldPlaceholder="Enter the C answer"
            fieldType="text"
          />
          <TextField
            label="D"
            fieldName={`questionFour${questionNumber}`}
            fieldPlaceholder="Enter the D answer"
            fieldType="text"
          />
        </>
      );
      break;
  }

  return <Text tagName="span">Please select a question type</Text>;
};

export default CreateQuestion;
