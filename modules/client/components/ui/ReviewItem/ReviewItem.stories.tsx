import * as React from "react";
import { storiesOf } from "@storybook/react";
import ReviewItem from "./ReviewItem";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("ReviewItem", () => (
  <TestProvider>
    <ReviewItem />
  </TestProvider>
));
