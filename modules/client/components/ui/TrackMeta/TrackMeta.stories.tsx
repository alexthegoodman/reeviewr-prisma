import * as React from "react";
import { storiesOf } from "@storybook/react";
import TrackMeta from "./TrackMeta";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("TrackMeta", () => (
  <TestProvider>
    <TrackMeta />
  </TestProvider>
));
