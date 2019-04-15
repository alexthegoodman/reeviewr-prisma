import * as React from "react";
import { render } from "enzyme";

import AddReview from "./AddReview";
import TestProvider from "../../../TestProvider";

describe("AddReview", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <AddReview imageUrl="https://via.placeholder.com/100" />
      </TestProvider>
    );
  });

  it("Should display the image provided", () => {});

  it("Should run the callback when clicked", () => {});
});
