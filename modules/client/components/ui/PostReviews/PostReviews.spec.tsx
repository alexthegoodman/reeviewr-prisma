import * as React from "react";
import { render } from "enzyme";

import PostReviews from "./PostReviews";
import TestProvider from "../../modules/client/TestProvider";

describe("PostReviews", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PostReviews />
      </TestProvider>
    );
  });

  it("", () => {});
});
