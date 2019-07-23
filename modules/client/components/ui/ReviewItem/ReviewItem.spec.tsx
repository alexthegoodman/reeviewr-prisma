import * as React from "react";
import { render } from "enzyme";

import ReviewItem from "./ReviewItem";
import TestProvider from "../../modules/client/TestProvider";

describe("ReviewItem", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <ReviewItem />
      </TestProvider>
    );
  });

  it("", () => {});
});
