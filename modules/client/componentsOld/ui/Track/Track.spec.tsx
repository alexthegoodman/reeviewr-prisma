import * as React from "react";
import { render } from "enzyme";

import Track from "./Track";
import TestProvider from "../../../TestProvider";

describe("Track", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <Track />
      </TestProvider>
    );
  });

  it("", () => {});
});
