import * as React from "react";
import { render } from "enzyme";

import Logo from "./Logo";
import TestProvider from "../../modules/client/TestProvider";

describe("Logo", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <Logo />
      </TestProvider>
    );
  });

  it("", () => {});
});
