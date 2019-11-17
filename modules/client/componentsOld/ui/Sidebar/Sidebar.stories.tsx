import * as React from "react";
import { storiesOf } from "@storybook/react";
import Sidebar from "./Sidebar";
import TestProvider from "../../../TestProvider";
import MenuItem from "../MenuItem/MenuItem";
import { Menu } from "@blueprintjs/core";

const stories = storiesOf("UI Components", module);

stories.add("Sidebar", () => (
  <TestProvider>
    <Sidebar>
      <Menu className="sidebarMenu">
        <MenuItem active={true}>Tracks</MenuItem>
        <MenuItem>Artists</MenuItem>
        <MenuItem>Reviews</MenuItem>
      </Menu>
    </Sidebar>
  </TestProvider>
));
