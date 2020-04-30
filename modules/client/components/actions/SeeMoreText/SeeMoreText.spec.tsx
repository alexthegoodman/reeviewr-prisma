import * as React from "react";
import { render } from "enzyme";

import SeeMoreText from "./SeeMoreText";
import TestProvider from "../../modules/client/TestProvider";

describe("SeeMoreText", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <SeeMoreText />
      </TestProvider>
    );
  });

  it("", () => {});
});
