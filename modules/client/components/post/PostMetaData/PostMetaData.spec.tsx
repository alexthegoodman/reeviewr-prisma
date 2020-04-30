import * as React from "react";
import { render } from "enzyme";

import PostMetaData from "./PostMetaData";
import TestProvider from "../../modules/client/TestProvider";

describe("PostMetaData", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PostMetaData />
      </TestProvider>
    );
  });

  it("", () => {});
});
