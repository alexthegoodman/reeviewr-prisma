import * as React from "react";
import { storiesOf } from "@storybook/react";
import TrackArt from "./TrackArt";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("TrackArt", () => (
  <TestProvider>
    <TrackArt
      imageUrl="https://via.placeholder.com/400"
      altText="Reeviewr Track"
    />
  </TestProvider>
));
