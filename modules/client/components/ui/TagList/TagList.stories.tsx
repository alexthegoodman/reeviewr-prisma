import * as React from "react";
import { storiesOf } from "@storybook/react";
import TagList from "./TagList";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("TagList", () => (
  <TestProvider>
    <TagList />
  </TestProvider>
));
