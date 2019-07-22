import * as React from "react";
import { storiesOf } from "@storybook/react";
import PostCard from "./PostCard";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PostCard", () => (
  <TestProvider>
    <PostCard />
  </TestProvider>
));
