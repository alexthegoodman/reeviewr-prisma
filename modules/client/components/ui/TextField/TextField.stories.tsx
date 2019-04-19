import * as React from "react";
import { storiesOf } from "@storybook/react";
import TextField from "./TextField";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("TextField", () => (
  <TestProvider>
    <TextField />
  </TestProvider>
));
