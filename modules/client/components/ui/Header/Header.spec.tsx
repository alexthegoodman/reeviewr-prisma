import * as React from "react";
import { render } from "enzyme";

import Header from "./Header";
import TestProvider from "../../../TestProvider";

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <Header />
      </TestProvider>
    );
  });

  it("Render the left and right elements in the correct spots", () => {});
});
