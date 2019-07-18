import * as React from "react";
import { storiesOf } from "@storybook/react";
import TrackHeader from "./TrackHeader";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("TrackHeader", () => (
  <TestProvider>
    <TrackHeader trackTitle="All of the Lights" artistName="Regina Spektor" />
  </TestProvider>
));
