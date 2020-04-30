import * as React from "react";
import { storiesOf } from "@storybook/react";
import NotificationItem from "./NotificationItem";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("NotificationItem", () => (
  <TestProvider>
    <NotificationItem />
  </TestProvider>
));
