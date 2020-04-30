import * as React from "react";
import { render } from "enzyme";

import Advertisement from "./Advertisement";
import TestProvider from "../../modules/client/TestProvider";

describe("Advertisement", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <Advertisement />
      </TestProvider>
    );
  });

  it("", () => {});
});
