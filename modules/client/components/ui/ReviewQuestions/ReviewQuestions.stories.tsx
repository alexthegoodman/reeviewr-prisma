import * as React from "react";
import { storiesOf } from "@storybook/react";
import ReviewQuestions from "./ReviewQuestions";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("ReviewQuestions", () => (
  <TestProvider>
    <ReviewQuestions />
  </TestProvider>
));
