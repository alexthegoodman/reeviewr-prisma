import * as React from "react";
import { storiesOf } from "@storybook/react";
import TextareaField from "./TextareaField";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("TextareaField", () => (
  <TestProvider>
    <TextareaField fieldName="name" />
  </TestProvider>
));
