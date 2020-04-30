import * as React from "react";
import { storiesOf } from "@storybook/react";
import FlushContentWrapper from "./FlushContentWrapper";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("FlushContentWrapper", () => (
  <TestProvider>
    <FlushContentWrapper />
  </TestProvider>
));
