import * as React from "react";
import { storiesOf } from "@storybook/react";
import MenuItem from "./MenuItem";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("MenuItem", () => (
  <TestProvider>
    <MenuItem />
  </TestProvider>
));
