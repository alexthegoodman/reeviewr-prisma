import * as React from "react";
import { render } from "enzyme";

import GraphCard from "./GraphCard";
import TestProvider from "../../../TestProvider";

describe("GraphCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <GraphCard />
      </TestProvider>
    );
  });

  it("", () => {});
});
