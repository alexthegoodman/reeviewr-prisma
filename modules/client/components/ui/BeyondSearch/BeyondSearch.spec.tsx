import * as React from "react";
import { render } from "enzyme";

import BeyondSearch from "./BeyondSearch";
import TestProvider from "../../../TestProvider";

describe("BeyondSearch", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <BeyondSearch />
      </TestProvider>
    );
  });

  it("", () => {});
});
