import * as React from "react";
import { storiesOf } from "@storybook/react";
import SpaceCard from "./SpaceCard";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("SpaceCard", () => (
  <TestProvider>
    <SpaceCard />
  </TestProvider>
));
