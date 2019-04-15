import * as React from "react";
import { storiesOf } from "@storybook/react";
import GraphCard from "./GraphCard";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("GraphCard", () => (
  <TestProvider>
    <GraphCard />
  </TestProvider>
));
