import * as React from "react";
import { storiesOf } from "@storybook/react";
import MenuSection from "./MenuSection";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("MenuSection", () => (
  <TestProvider>
    <MenuSection />
  </TestProvider>
));
