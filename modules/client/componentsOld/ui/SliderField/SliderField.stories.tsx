import * as React from "react";
import { storiesOf } from "@storybook/react";
import SliderField from "./SliderField";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("SliderField", () => (
  <TestProvider>
    <SliderField />
  </TestProvider>
));
