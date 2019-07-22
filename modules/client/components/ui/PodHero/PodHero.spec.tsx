import * as React from "react";
import { render } from "enzyme";

import PodHero from "./PodHero";
import TestProvider from "../../modules/client/TestProvider";

describe("PodHero", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PodHero />
      </TestProvider>
    );
  });

  it("", () => {});
});
