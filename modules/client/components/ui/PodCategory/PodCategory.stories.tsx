import * as React from "react";
import { storiesOf } from "@storybook/react";
import PodCategory from "./PodCategory";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PodCategory", () => (
  <TestProvider>
    <PodCategory />
  </TestProvider>
));
