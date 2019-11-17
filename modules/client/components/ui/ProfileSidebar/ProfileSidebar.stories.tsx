import * as React from "react";
import { storiesOf } from "@storybook/react";
import ProfileSidebar from "./ProfileSidebar";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("ProfileSidebar", () => (
  <TestProvider>
    <ProfileSidebar />
  </TestProvider>
));
