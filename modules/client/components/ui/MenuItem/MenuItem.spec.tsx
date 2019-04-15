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

  it("", () => {});
});
