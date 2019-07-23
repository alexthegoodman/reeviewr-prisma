import * as React from "react";
import { storiesOf } from "@storybook/react";
import AnnotationItem from "./AnnotationItem";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("AnnotationItem", () => (
  <TestProvider>
    <AnnotationItem />
  </TestProvider>
));
