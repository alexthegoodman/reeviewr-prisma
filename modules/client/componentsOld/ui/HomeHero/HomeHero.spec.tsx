import * as React from "react";
import { render } from "enzyme";

import HomeHero from "./HomeHero";
import TestProvider from "../../modules/client/TestProvider";

describe("HomeHero", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <HomeHero />
      </TestProvider>
    );
  });

  it("", () => {});
});
