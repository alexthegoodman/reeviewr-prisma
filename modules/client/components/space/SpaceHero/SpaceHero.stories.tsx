import * as React from "react";
import { storiesOf } from "@storybook/react";
import SpaceHero from "./SpaceHero";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("SpaceHero", () => (
  <TestProvider>
    <SpaceHero />
  </TestProvider>
));
