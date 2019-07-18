import * as React from "react";
import { storiesOf } from "@storybook/react";
import Track from "./Track";
import TestProvider from "../../../TestProvider";
import ReviewCard from "../ReviewCard/ReviewCard";

const stories = storiesOf("UI Components", module);

stories.add("Track", () => (
  <TestProvider>
    <Track
      imageUrl={"https://via.placeholder.com/400"}
      altText={"Track Title"}
      trackTitle={"Track Title"}
      artistName={"Artist Name"}
    >
      <ReviewCard
        artistTitle="Artist Title"
        answerPreview="Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo."
        reviewerImageUrl="https://via.placeholder.com/100"
        reviewerAltText="Artist Name"
        trackImageUrl="https://via.placeholder.com/100"
        trackAltText="Track Title"
      />
      <ReviewCard
        artistTitle="Artist Title"
        answerPreview="Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo."
        reviewerImageUrl="https://via.placeholder.com/100"
        reviewerAltText="Artist Name"
        trackImageUrl="https://via.placeholder.com/100"
        trackAltText="Track Title"
      />
      <ReviewCard
        artistTitle="Artist Title"
        answerPreview="Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo."
        reviewerImageUrl="https://via.placeholder.com/100"
        reviewerAltText="Artist Name"
        trackImageUrl="https://via.placeholder.com/100"
        trackAltText="Track Title"
      />
    </Track>
  </TestProvider>
));
