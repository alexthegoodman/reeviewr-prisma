import * as React from "react";
import { render } from "enzyme";

import ReviewCard from "./ReviewCard";
import TestProvider from "../../../TestProvider";

describe("ReviewCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <ReviewCard />
      </TestProvider>
    );
  });

  it("", () => {});
});
