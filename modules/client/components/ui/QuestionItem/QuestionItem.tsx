import * as React from "react";

import { QuestionItemProps } from "./QuestionItem.d";

const QuestionItem: React.FC<QuestionItemProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return <></>;
};

export default QuestionItem;
