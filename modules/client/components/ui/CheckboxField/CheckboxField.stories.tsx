import * as React from "react";
import { storiesOf } from "@storybook/react";
import CheckboxField from "./CheckboxField";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("CheckboxField", () => (
  <TestProvider>
    <CheckboxField fieldName="name" />
  </TestProvider>
));
