import * as React from "react";
import { storiesOf } from "@storybook/react";
import PostVideoViewer from "./PostVideoViewer";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PostVideoViewer", () => (
  <TestProvider>
    <PostVideoViewer />
  </TestProvider>
));
