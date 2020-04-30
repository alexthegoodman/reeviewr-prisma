import * as React from "react";
import { render } from "enzyme";

import CategoryGrid from "./CategoryGrid";
import TestProvider from "../../modules/client/TestProvider";

describe("CategoryGrid", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <CategoryGrid />
      </TestProvider>
    );
  });

  it("", () => {});
});
