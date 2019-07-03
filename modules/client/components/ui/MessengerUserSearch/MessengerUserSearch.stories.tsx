import * as React from "react";
import { storiesOf } from "@storybook/react";
import MessengerUserSearch from "./MessengerUserSearch";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("MessengerUserSearch", () => (
  <TestProvider>
    <MessengerUserSearch />
  </TestProvider>
));
