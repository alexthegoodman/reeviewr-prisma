import * as React from "react";
import { render } from "enzyme";

import TrackArt from "./TrackArt";
import TestProvider from "../../../TestProvider";

describe("TrackArt", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <TrackArt />
      </TestProvider>
    );
  });

  it("", () => {});
});
