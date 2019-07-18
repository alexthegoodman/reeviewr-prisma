import * as React from "react";
import { render } from "enzyme";

import CreateQuestion from "./CreateQuestion";
import TestProvider from "../../modules/client/TestProvider";

describe("CreateQuestion", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <CreateQuestion />
      </TestProvider>
    );
  });

  it("", () => {});
});
