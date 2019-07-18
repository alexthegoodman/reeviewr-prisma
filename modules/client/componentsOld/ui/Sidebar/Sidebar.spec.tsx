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

  it("Should render a unique set of props on mobile and desktop", () => {});

  it("Should run the respective callbacks when closed and opened", () => {});
});
