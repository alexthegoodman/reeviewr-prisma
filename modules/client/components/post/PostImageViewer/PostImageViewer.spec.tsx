import * as React from "react";
import { render } from "enzyme";

import PostImageViewer from "./PostImageViewer";
import TestProvider from "../../modules/client/TestProvider";

describe("PostImageViewer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PostImageViewer />
      </TestProvider>
    );
  });

  it("", () => {});
});
