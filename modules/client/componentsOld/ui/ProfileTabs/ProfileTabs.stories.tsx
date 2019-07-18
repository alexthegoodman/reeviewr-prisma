import * as React from "react";
import { storiesOf } from "@storybook/react";
import ProfileTabs from "./ProfileTabs";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("ProfileTabs", () => (
  <TestProvider>
    <ProfileTabs />
  </TestProvider>
));
