import * as React from "react";
import { render } from "enzyme";

import TagList from "./TagList";
import TestProvider from "../../modules/client/TestProvider";

describe("TagList", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <TagList />
      </TestProvider>
    );
  });

  it("", () => {});
});
