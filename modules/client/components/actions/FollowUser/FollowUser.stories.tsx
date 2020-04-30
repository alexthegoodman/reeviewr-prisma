import * as React from "react";
import { storiesOf } from "@storybook/react";
import FollowUser from "./FollowUser";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("FollowUser", () => (
  <TestProvider>
    <FollowUser />
  </TestProvider>
));
