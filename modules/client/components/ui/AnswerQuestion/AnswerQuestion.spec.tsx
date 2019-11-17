import * as React from "react";
import { render } from "enzyme";

import AnswerQuestion from "./AnswerQuestion";
import TestProvider from "../../modules/client/TestProvider";

describe("AnswerQuestion", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <AnswerQuestion />
      </TestProvider>
    );
  });

  it("", () => {});
});
