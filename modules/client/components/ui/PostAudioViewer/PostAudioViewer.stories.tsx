import * as React from "react";
import { storiesOf } from "@storybook/react";
import PostAudioViewer from "./PostAudioViewer";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PostAudioViewer", () => (
  <TestProvider>
    <PostAudioViewer />
  </TestProvider>
));
