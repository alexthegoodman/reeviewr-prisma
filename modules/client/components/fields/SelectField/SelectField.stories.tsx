import * as React from "react";
import { storiesOf } from "@storybook/react";
import SelectField from "./SelectField";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("SelectField", () => (
  <TestProvider>
    <SelectField fieldName="name" options={[]} />
  </TestProvider>
));
