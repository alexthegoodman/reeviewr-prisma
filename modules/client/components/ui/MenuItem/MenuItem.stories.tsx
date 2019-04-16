import * as React from "react";
import { storiesOf } from "@storybook/react";
import MenuItem from "./MenuItem";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories
  .add("MenuItem", () => (
    <TestProvider>
      <MenuItem>Menu Item</MenuItem>
    </TestProvider>
  ))
  .add("MenuItem - Active", () => (
    <TestProvider>
      <MenuItem active={true}>Menu Item</MenuItem>
    </TestProvider>
  ));
