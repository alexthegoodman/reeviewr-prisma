import * as React from "react";
import { storiesOf } from "@storybook/react";
import BeyondSearch from "./BeyondSearch";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("BeyondSearch", () => (
  <TestProvider>
    <BeyondSearch placeholder="Search tracks, artists, and reviews..." />
  </TestProvider>
));
