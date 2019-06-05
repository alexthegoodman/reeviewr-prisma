import * as React from "react";
import { render } from "enzyme";

import LoadingIndicator from "./LoadingIndicator";
import TestProvider from "../../modules/client/TestProvider";

describe("LoadingIndicator", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <LoadingIndicator />
      </TestProvider>
    );
  });

  it("", () => {});
});
