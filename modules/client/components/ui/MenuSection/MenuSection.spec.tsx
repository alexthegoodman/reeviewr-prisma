import * as React from "react";
import { render } from "enzyme";

import MenuSection from "./MenuSection";
import TestProvider from "../../../TestProvider";

describe("MenuSection", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <MenuSection />
      </TestProvider>
    );
  });

  it("", () => {});
});
