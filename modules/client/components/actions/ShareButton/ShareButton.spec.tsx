import * as React from "react";
import { render } from "enzyme";

import ShareButton from "./ShareButton";
import TestProvider from "../../modules/client/TestProvider";

describe("ShareButton", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <ShareButton />
      </TestProvider>
    );
  });

  it("", () => {});
});
