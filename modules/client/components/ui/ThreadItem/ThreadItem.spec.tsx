import * as React from "react";
import { render } from "enzyme";

import ThreadItem from "./ThreadItem";
import TestProvider from "../../modules/client/TestProvider";

describe("ThreadItem", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <ThreadItem />
      </TestProvider>
    );
  });

  it("", () => {});
});
