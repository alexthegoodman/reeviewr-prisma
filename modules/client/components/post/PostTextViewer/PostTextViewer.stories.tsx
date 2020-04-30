import * as React from "react";
import { storiesOf } from "@storybook/react";
import PostTextViewer from "./PostTextViewer";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PostTextViewer", () => (
  <TestProvider>
    <PostTextViewer />
  </TestProvider>
));
