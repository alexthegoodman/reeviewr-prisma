import * as React from "react";
import { storiesOf } from "@storybook/react";
import QuestionItem from "./QuestionItem";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("QuestionItem", () => (
  <TestProvider>
    <QuestionItem />
  </TestProvider>
));
