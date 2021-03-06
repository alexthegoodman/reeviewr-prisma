import * as React from "react";
import { storiesOf } from "@storybook/react";
import PostAnnotations from "./PostAnnotations";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("PostAnnotations", () => (
  <TestProvider>
    <PostAnnotations />
  </TestProvider>
));
