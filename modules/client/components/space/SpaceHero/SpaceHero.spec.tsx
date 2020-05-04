import * as React from "react";
import { render } from "enzyme";

import SpaceHero from "./SpaceHero";
import TestProvider from "../../../TestProvider";

describe("SpaceHero", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <SpaceHero />
      </TestProvider>
    );
  });

  it("", () => {});
});
