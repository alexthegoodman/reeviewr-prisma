import * as React from "react";
import { storiesOf } from "@storybook/react";
import GenComponent from "./GenComponent";

const stories = storiesOf("UI Components", module);

stories.add("GenComponent", () => <GenComponent />);
