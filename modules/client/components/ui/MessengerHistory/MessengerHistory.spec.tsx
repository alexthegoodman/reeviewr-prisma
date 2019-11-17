import * as React from "react";
import { render } from "enzyme";

import MessengerHistory from "./MessengerHistory";
import TestProvider from "../../modules/client/TestProvider";

describe("MessengerHistory", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <MessengerHistory />
      </TestProvider>
    );
  });

  it("", () => {});
});
