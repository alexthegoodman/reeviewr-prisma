import * as React from "react";
import { render } from "enzyme";

import SpaceCard from "./SpaceCard";
import TestProvider from "../../../TestProvider";

describe("SpaceCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <SpaceCard />
      </TestProvider>
    );
  });

  it("", () => {});
});
