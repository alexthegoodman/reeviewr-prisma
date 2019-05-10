import * as React from "react";
import { storiesOf } from "@storybook/react";
import AnswerQuestion from "./AnswerQuestion";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("AnswerQuestion", () => (
  <TestProvider>
    <AnswerQuestion />
  </TestProvider>
));
