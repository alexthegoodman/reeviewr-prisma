import * as React from "react";
import { storiesOf } from "@storybook/react";
import PostInfo from "./PostInfo";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PostInfo", () => (
  <TestProvider>
    <PostInfo />
  </TestProvider>
));
