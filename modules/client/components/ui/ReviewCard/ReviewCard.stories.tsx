import * as React from "react";
import { storiesOf } from "@storybook/react";
import ReviewCard from "./ReviewCard";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("ReviewCard", () => (
  <TestProvider>
    <ReviewCard />
  </TestProvider>
));
