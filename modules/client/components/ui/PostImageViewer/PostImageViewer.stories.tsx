import * as React from "react";
import { storiesOf } from "@storybook/react";
import PostImageViewer from "./PostImageViewer";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PostImageViewer", () => (
  <TestProvider>
    <PostImageViewer />
  </TestProvider>
));
