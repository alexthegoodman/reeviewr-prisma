import * as React from "react";
import { storiesOf } from "@storybook/react";
import MiniPostCard from "./MiniPostCard";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("MiniPostCard", () => (
  <TestProvider>
    <MiniPostCard />
  </TestProvider>
));
