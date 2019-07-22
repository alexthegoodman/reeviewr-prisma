import * as React from "react";
import { render } from "enzyme";

import PodCategory from "./PodCategory";
import TestProvider from "../../modules/client/TestProvider";

describe("PodCategory", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PodCategory />
      </TestProvider>
    );
  });

  it("", () => {});
});
