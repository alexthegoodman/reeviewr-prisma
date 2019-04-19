import * as React from "react";
import { storiesOf } from "@storybook/react";
import SelectField from "./SelectField";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("SelectField", () => (
  <TestProvider>
    <SelectField />
  </TestProvider>
));
