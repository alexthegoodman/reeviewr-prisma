import * as React from "react";
import { render } from "enzyme";

import PostCtrls from "./PostCtrls";
import TestProvider from "../../modules/client/TestProvider";

describe("PostCtrls", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PostCtrls />
      </TestProvider>
    );
  });

  it("", () => {});
});
