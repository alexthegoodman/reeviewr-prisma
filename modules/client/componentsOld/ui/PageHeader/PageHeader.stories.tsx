import * as React from "react";
import { storiesOf } from "@storybook/react";
import PageHeader from "./PageHeader";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PageHeader", () => (
  <TestProvider>
    <PageHeader />
  </TestProvider>
));
