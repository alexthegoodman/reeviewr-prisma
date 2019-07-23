import * as React from "react";
import { render } from "enzyme";

import PostQuestions from "./PostQuestions";
import TestProvider from "../../modules/client/TestProvider";

describe("PostQuestions", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PostQuestions />
      </TestProvider>
    );
  });

  it("", () => {});
});
