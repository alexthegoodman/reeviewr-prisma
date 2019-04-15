import * as React from "react";
import { render } from "enzyme";

import BeyondButton from "./BeyondButton";
import TestProvider from "../../../TestProvider";

describe("BeyondButton", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <BeyondButton />
      </TestProvider>
    );
  });

  it("", () => {});
});
