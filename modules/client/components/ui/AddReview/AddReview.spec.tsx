import * as React from "react";
import { render } from "enzyme";

import AddReview from "./AddReview";
import TestProvider from "../../../TestProvider";

describe("AddReview", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <AddReview />
      </TestProvider>
    );
  });

  it("", () => {});
});
