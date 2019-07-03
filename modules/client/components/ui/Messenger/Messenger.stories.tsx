import * as React from "react";
import { storiesOf } from "@storybook/react";
import Messenger from "./Messenger";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("Messenger", () => (
  <TestProvider>
    <Messenger />
  </TestProvider>
));
