import * as React from "react";
import { render } from "enzyme";

import GraphCard from "./GraphCard";
import TestProvider from "../../../TestProvider";

describe("GraphCard", () => {
  let wrapper;

  beforeEach(() => {
    const greenData = [{ x: "A", y: 10 }, { x: "B", y: 5 }, { x: "C", y: 15 }];

    wrapper = render(
      <TestProvider>
        <GraphCard dataSet1={greenData} />
      </TestProvider>
    );
  });

  it("", () => {});
});
