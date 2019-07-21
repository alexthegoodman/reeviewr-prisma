import * as React from "react";
import { storiesOf } from "@storybook/react";
import Advertisement from "./Advertisement";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("Advertisement", () => (
  <TestProvider>
    <Advertisement />
  </TestProvider>
));
