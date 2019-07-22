import * as React from "react";
import { storiesOf } from "@storybook/react";
import CategoryGrid from "./CategoryGrid";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("CategoryGrid", () => (
  <TestProvider>
    <CategoryGrid />
  </TestProvider>
));
