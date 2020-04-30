import * as React from "react";
import { render } from "enzyme";

import Messenger from "./Messenger";
import TestProvider from "../../modules/client/TestProvider";

describe("Messenger", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <Messenger />
      </TestProvider>
    );
  });

  it("", () => {});
});
