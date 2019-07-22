import * as React from "react";
import { render } from "enzyme";

import MiniPostCard from "./MiniPostCard";
import TestProvider from "../../modules/client/TestProvider";

describe("MiniPostCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <MiniPostCard />
      </TestProvider>
    );
  });

  it("", () => {});
});
