import * as React from "react";
import { storiesOf } from "@storybook/react";
import ReviewCard from "./ReviewCard";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("ReviewCard", () => (
  <TestProvider>
    <ReviewCard
      artistTitle="Artist Title"
      answerPreview="Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo."
      reviewerImageUrl="https://via.placeholder.com/100"
      reviewerAltText="Artist Name"
      trackImageUrl="https://via.placeholder.com/100"
      trackAltText="Track Title"
    />
  </TestProvider>
));
