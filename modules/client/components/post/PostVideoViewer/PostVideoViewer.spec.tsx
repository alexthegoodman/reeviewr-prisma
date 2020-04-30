import * as React from "react";
import { render } from "enzyme";

import PostVideoViewer from "./PostVideoViewer";
import TestProvider from "../../modules/client/TestProvider";

describe("PostVideoViewer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PostVideoViewer />
      </TestProvider>
    );
  });

  it("", () => {});
});
