import * as React from "react";
import { render } from "enzyme";

import JoinButton from "./JoinButton";
import TestProvider from "../../modules/client/TestProvider";

describe("JoinButton", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <JoinButton />
      </TestProvider>
    );
  });

  it("", () => {});
});
