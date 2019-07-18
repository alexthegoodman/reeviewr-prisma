import * as React from "react";
import { storiesOf } from "@storybook/react";
import LoadingIndicator from "./LoadingIndicator";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("LoadingIndicator", () => (
  <TestProvider>
    <LoadingIndicator />
  </TestProvider>
));
