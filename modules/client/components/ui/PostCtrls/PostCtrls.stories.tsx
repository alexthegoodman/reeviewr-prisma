import * as React from "react";
import { storiesOf } from "@storybook/react";
import PostCtrls from "./PostCtrls";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PostCtrls", () => (
  <TestProvider>
    <PostCtrls />
  </TestProvider>
));
