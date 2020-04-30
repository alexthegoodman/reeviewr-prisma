import * as React from "react";
import { render } from "enzyme";

import QuestionItem from "./QuestionItem";
import TestProvider from "../../modules/client/TestProvider";

describe("QuestionItem", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <QuestionItem />
      </TestProvider>
    );
  });

  it("", () => {});
});
