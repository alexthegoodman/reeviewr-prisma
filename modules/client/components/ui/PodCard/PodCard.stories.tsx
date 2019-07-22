import * as React from "react";
import { storiesOf } from "@storybook/react";
import PodCard from "./PodCard";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PodCard", () => (
  <TestProvider>
    <PodCard />
  </TestProvider>
));
