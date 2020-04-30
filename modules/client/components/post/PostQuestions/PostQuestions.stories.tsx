import * as React from "react";
import { storiesOf } from "@storybook/react";
import PostQuestions from "./PostQuestions";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PostQuestions", () => (
  <TestProvider>
    <PostQuestions />
  </TestProvider>
));
