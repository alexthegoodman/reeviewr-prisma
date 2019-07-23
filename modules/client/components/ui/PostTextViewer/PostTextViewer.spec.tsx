import * as React from "react";
import { render } from "enzyme";

import PostTextViewer from "./PostTextViewer";
import TestProvider from "../../modules/client/TestProvider";

describe("PostTextViewer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PostTextViewer />
      </TestProvider>
    );
  });

  it("", () => {});
});
