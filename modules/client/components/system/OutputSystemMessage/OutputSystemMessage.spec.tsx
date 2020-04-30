import * as React from "react";
import { render } from "enzyme";

import OutputSystemMessage from "./OutputSystemMessage";
import TestProvider from "../../modules/client/TestProvider";

describe("OutputSystemMessage", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <OutputSystemMessage />
      </TestProvider>
    );
  });

  it("", () => {});
});
