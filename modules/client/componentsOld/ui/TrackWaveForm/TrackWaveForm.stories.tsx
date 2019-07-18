import * as React from "react";
import { storiesOf } from "@storybook/react";
import TrackWaveForm from "./TrackWaveForm";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("TrackWaveForm", () => (
  <TestProvider>
    <TrackWaveForm />
  </TestProvider>
));
