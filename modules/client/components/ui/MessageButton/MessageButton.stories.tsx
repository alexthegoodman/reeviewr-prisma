import * as React from "react";
import { storiesOf } from "@storybook/react";
import MessageButton from "./MessageButton";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("MessageButton", () => (
  <TestProvider>
    <MessageButton />
  </TestProvider>
));
