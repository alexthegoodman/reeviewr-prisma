import * as React from "react";
import { storiesOf } from "@storybook/react";
import RadioField from "./RadioField";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("RadioField", () => (
  <TestProvider>
    <RadioField />
  </TestProvider>
));
