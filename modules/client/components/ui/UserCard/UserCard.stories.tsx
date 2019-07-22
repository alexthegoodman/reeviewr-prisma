import * as React from "react";
import { storiesOf } from "@storybook/react";
import UserCard from "./UserCard";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("UserCard", () => (
  <TestProvider>
    <UserCard />
  </TestProvider>
));
