import * as React from "react";
import { render } from "enzyme";

import FlushContentWrapper from "./FlushContentWrapper";
import TestProvider from "../../modules/client/TestProvider";

describe("FlushContentWrapper", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <FlushContentWrapper />
      </TestProvider>
    );
  });

  it("", () => {});
});
