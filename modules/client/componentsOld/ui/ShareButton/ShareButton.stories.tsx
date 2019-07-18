import * as React from "react";
import { storiesOf } from "@storybook/react";
import ShareButton from "./ShareButton";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("ShareButton", () => (
  <TestProvider>
    <ShareButton />
  </TestProvider>
));
