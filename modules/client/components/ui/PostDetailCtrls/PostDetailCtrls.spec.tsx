import * as React from "react";
import { render } from "enzyme";

import PostDetailCtrls from "./PostDetailCtrls";
import TestProvider from "../../modules/client/TestProvider";

describe("PostDetailCtrls", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PostDetailCtrls />
      </TestProvider>
    );
  });

  it("", () => {});
});
