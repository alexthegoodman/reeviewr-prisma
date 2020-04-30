import * as React from "react";
import { storiesOf } from "@storybook/react";
import UploadField from "./UploadField";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("UploadField", () => (
  <TestProvider>
    <UploadField fieldName="name" />
  </TestProvider>
));
