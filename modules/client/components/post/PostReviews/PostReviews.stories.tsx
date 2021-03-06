import * as React from "react";
import { storiesOf } from "@storybook/react";
import PostReviews from "./PostReviews";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PostReviews", () => (
  <TestProvider>
    <PostReviews />
  </TestProvider>
));
