import * as React from "react";
import { render } from "enzyme";

import ReviewQuestions from "./ReviewQuestions";
import TestProvider from "../../modules/client/TestProvider";

describe("ReviewQuestions", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <ReviewQuestions />
      </TestProvider>
    );
  });

  it("", () => {});
});
