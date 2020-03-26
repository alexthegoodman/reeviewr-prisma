import * as React from "react";
import { storiesOf } from "@storybook/react";
import PostDetailCtrls from "./PostDetailCtrls";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PostDetailCtrls", () => (
  <TestProvider>
    <PostDetailCtrls />
  </TestProvider>
));
