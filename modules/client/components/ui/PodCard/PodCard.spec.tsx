import * as React from "react";
import { render } from "enzyme";

import PodCard from "./PodCard";
import TestProvider from "../../modules/client/TestProvider";

describe("PodCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PodCard />
      </TestProvider>
    );
  });

  it("", () => {});
});
