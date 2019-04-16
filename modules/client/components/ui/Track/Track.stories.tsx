import * as React from "react";
import { storiesOf } from "@storybook/react";
import Track from "./Track";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("Track", () => (
  <TestProvider>
    <Track />
  </TestProvider>
));
