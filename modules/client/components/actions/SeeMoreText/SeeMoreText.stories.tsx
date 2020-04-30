import * as React from "react";
import { storiesOf } from "@storybook/react";
import SeeMoreText from "./SeeMoreText";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("SeeMoreText", () => (
  <TestProvider>
    <SeeMoreText />
  </TestProvider>
));
