import * as React from "react";
import { storiesOf } from "@storybook/react";
import BeyondButton from "./BeyondButton";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("BeyondButton", () => (
  <TestProvider>
    <BeyondButton />
  </TestProvider>
));
