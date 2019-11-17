import * as React from "react";
import { storiesOf } from "@storybook/react";
import MessengerHistory from "./MessengerHistory";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("MessengerHistory", () => (
  <TestProvider>
    <MessengerHistory />
  </TestProvider>
));
