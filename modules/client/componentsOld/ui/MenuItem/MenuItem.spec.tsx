import * as React from "react";
import { render } from "enzyme";

import MenuItem from "./MenuItem";
import TestProvider from "../../../TestProvider";

describe("MenuItem", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <MenuItem />
      </TestProvider>
    );
  });

  it("Should render the active colors in the active state and default colors in default state", () => {});

  it("Should run the callback when clicked", () => {});
});
