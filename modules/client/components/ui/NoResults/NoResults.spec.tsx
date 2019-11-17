import * as React from "react";
import { render } from "enzyme";

import NoResults from "./NoResults";
import TestProvider from "../../modules/client/TestProvider";

describe("NoResults", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <NoResults />
      </TestProvider>
    );
  });

  it("", () => {});
});
