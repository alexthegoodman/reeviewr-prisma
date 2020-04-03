import * as React from "react";

import { ReviewQuestionsProps } from "./ReviewQuestions.d";
import Hawaii from "../../../services/Hawaii";
import { Select } from "@blueprintjs/select";
import { Button } from "@blueprintjs/core";
import MenuItem from "../MenuItem/MenuItem";

interface QuestionItem {
  text: string;
}

function highlightText(text: string, query: string) {
  let lastIndex = 0;
  const words = query
    .split(/\s+/)
    .filter(word => word.length > 0)
    .map(escapeRegExpChars);
  if (words.length === 0) {
    return [text];
  }
  const regexp = new RegExp(words.join("|"), "gi");
  const tokens: React.ReactNode[] = [];
  while (true) {
    const match = regexp.exec(text);
    if (!match) {
      break;
    }
    const length = match[0].length;
    const before = text.slice(lastIndex, regexp.lastIndex - length);
    if (before.length > 0) {
      tokens.push(before);
    }
    lastIndex = regexp.lastIndex;
    tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
  }
  const rest = text.slice(lastIndex);
  if (rest.length > 0) {
    tokens.push(rest);
  }
  return tokens;
}

function escapeRegExpChars(text: string) {
  return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

const ReviewQuestions: React.FC<ReviewQuestionsProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  questions = [],
}) => {
  const hawaii = new Hawaii();
  const clickHandler = e => onClick(e);

  const QuestionSelect = Select.ofType<QuestionItem>();

  const renderItem = (question, { handleClick, modifiers, query }) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    const text = `${question.text}`;
    return (
      <MenuItem
        className="questionMenuItem"
        active={modifiers.active}
        disabled={modifiers.disabled}
        // label={film.year.toString()}
        // key={film.rank}
        onClick={handleClick}
        text={highlightText(text, query)}
        // {...props}
      />
    );
  };

  return (
    <div className="reviewQuestions">
      <div className="reviewQuestionsContain">
        <QuestionSelect
          // key={i}
          items={questions}
          // itemPredicate={Films.itemPredicate}
          itemRenderer={renderItem}
          // noResults={<MenuItem disabled={true} text="No results." />}
          onItemSelect={item => {
            console.info("item", item);
          }}
          filterable={false}
        >
          <div className="reviewDropdownContain">
            <label className="reviewDropdownLabel">Filter Reviews</label>
            <Button
              className="reviewDropdown"
              text={questions[0].text}
              rightIcon="double-caret-vertical"
            />
          </div>
        </QuestionSelect>
        {/* {questions.map((question, i) => {
          // return (
          //   <a
          //     key={i}
          //     href="#!"
          //     className={`reviewQuestionItem ${i === 1 ? "selected" : ""}`}
          //   >
          //     <span className="counter">{i + 1}</span>
          //     <span className="itemQuestion">
          //       {hawaii.stringHandler.lorem.generateWords(7)}?
          //     </span>
          //   </a>
          // );
        })} */}
      </div>
    </div>
  );
};

export default ReviewQuestions;
