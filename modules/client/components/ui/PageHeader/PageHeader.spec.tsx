import * as React from "react";
import { render } from "enzyme";

import PageHeader from "./PageHeader";
import TestProvider from "../../modules/client/TestProvider";

describe("PageHeader", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PageHeader />
      </TestProvider>
    );
  });

  it("", () => {});
});
