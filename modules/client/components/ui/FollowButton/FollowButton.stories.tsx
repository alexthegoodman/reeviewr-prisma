import * as React from "react";
import { storiesOf } from "@storybook/react";
import FollowButton from "./FollowButton";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("FollowButton", () => (
  <TestProvider>
    <FollowButton />
  </TestProvider>
));
