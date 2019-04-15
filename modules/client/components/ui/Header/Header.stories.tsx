import * as React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./Header";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("Header", () => (
  <TestProvider>
    <Header />
  </TestProvider>
));
