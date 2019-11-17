import * as React from "react";
import { storiesOf } from "@storybook/react";
import ThreadItem from "./ThreadItem";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("ThreadItem", () => (
  <TestProvider>
    <ThreadItem />
  </TestProvider>
));
