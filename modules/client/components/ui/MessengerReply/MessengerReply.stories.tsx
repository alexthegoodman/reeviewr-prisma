import * as React from "react";
import { storiesOf } from "@storybook/react";
import MessengerReply from "./MessengerReply";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("MessengerReply", () => (
  <TestProvider>
    <MessengerReply />
  </TestProvider>
));
