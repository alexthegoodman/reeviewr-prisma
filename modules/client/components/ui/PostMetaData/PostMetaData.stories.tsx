import * as React from "react";
import { storiesOf } from "@storybook/react";
import PostMetaData from "./PostMetaData";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PostMetaData", () => (
  <TestProvider>
    <PostMetaData />
  </TestProvider>
));
