import * as React from "react";
import { storiesOf } from "@storybook/react";
import Logo from "./Logo";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("Logo", () => (
  <TestProvider>
    <Logo />
  </TestProvider>
));
