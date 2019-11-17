import * as React from "react";
import { storiesOf } from "@storybook/react";
import MessageThreads from "./MessageThreads";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("MessageThreads", () => (
  <TestProvider>
    <MessageThreads />
  </TestProvider>
));
