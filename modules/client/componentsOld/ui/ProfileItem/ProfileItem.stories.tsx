import * as React from "react";
import { storiesOf } from "@storybook/react";
import ProfileItem from "./ProfileItem";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("ProfileItem", () => (
  <TestProvider>
    <ProfileItem
      imageUrl="https://via.placeholder.com/100"
      name="Alex Woodman"
    />
  </TestProvider>
));
