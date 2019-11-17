import * as React from "react";
import { storiesOf } from "@storybook/react";
import ValidationNotice from "./ValidationNotice";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("ValidationNotice", () => (
  <TestProvider>
    <ValidationNotice />
  </TestProvider>
));
