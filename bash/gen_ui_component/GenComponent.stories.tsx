import * as React from "react";
import { storiesOf } from "@storybook/react";
import GenComponent from "./GenComponent";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("GenComponent", () => (
  <TestProvider>
    <GenComponent />
  </TestProvider>
));
