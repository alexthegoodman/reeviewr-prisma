import * as React from "react";
import { render } from "enzyme";

import PostInfo from "./PostInfo";
import TestProvider from "../../modules/client/TestProvider";

describe("PostInfo", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PostInfo />
      </TestProvider>
    );
  });

  it("", () => {});
});
