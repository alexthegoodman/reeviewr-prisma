import * as React from "react";
import { storiesOf } from "@storybook/react";
import CreateQuestion from "./CreateQuestion";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("CreateQuestion", () => (
  <TestProvider>
    <CreateQuestion />
  </TestProvider>
));
