import * as React from "react";
import { render } from "enzyme";

import MessageThreads from "./MessageThreads";
import TestProvider from "../../modules/client/TestProvider";

describe("MessageThreads", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <MessageThreads />
      </TestProvider>
    );
  });

  it("", () => {});
});
