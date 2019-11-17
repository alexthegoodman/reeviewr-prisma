import * as React from "react";
import { storiesOf } from "@storybook/react";
import ContentFooter from "./ContentFooter";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("ContentFooter", () => (
  <TestProvider>
    <ContentFooter />
  </TestProvider>
));
