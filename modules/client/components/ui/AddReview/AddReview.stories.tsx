import * as React from "react";
import { storiesOf } from "@storybook/react";
import AddReview from "./AddReview";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("AddReview", () => (
  <TestProvider>
    <AddReview />
  </TestProvider>
));
