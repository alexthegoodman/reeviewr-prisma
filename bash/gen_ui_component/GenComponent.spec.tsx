import * as React from "react";
import { render } from "enzyme";

import GenComponent from "./GenComponent";
import TestProvider from "../../modules/client/TestProvider";

describe("GenComponent", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <GenComponent />
      </TestProvider>
    );
  });

  it("", () => {});
});
