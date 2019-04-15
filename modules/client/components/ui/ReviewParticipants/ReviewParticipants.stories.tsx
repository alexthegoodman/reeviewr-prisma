import * as React from "react";
import { storiesOf } from "@storybook/react";
import ReviewParticipants from "./ReviewParticipants";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("ReviewParticipants", () => (
  <TestProvider>
    <ReviewParticipants />
  </TestProvider>
));
