import * as React from "react";
import { storiesOf } from "@storybook/react";
import PodHero from "./PodHero";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PodHero", () => (
  <TestProvider>
    <PodHero />
  </TestProvider>
));
