import * as React from "react";
import { storiesOf } from "@storybook/react";
import Sidebar from "./Sidebar";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("Sidebar", () => (
  <TestProvider>
    <Sidebar />
  </TestProvider>
));
