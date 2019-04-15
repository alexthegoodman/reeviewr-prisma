import * as React from "react";
import { render } from "enzyme";

import Sidebar from "./Sidebar";
import TestProvider from "../../../TestProvider";

describe("Sidebar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <Sidebar />
      </TestProvider>
    );
  });

  it("", () => {});
});
