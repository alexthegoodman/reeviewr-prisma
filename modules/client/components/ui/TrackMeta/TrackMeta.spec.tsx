import * as React from "react";
import { render } from "enzyme";

import TrackMeta from "./TrackMeta";
import TestProvider from "../../../TestProvider";

describe("TrackMeta", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <TrackMeta />
      </TestProvider>
    );
  });

  it("", () => {});
});
