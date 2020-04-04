import * as React from "react";
import { storiesOf } from "@storybook/react";
import OutputSystemMessage from "./OutputSystemMessage";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("OutputSystemMessage", () => (
  <TestProvider>
    <OutputSystemMessage />
  </TestProvider>
));
