import * as React from "react";
import { render } from "enzyme";

import ContentFooter from "./ContentFooter";
import TestProvider from "../../modules/client/TestProvider";

describe("ContentFooter", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <ContentFooter />
      </TestProvider>
    );
  });

  it("", () => {});
});
