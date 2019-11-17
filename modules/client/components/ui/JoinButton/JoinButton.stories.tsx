import * as React from "react";
import { storiesOf } from "@storybook/react";
import JoinButton from "./JoinButton";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("JoinButton", () => (
  <TestProvider>
    <JoinButton />
  </TestProvider>
));
