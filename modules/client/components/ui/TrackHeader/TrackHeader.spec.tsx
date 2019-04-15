import * as React from "react";
import { render } from "enzyme";

import TrackHeader from "./TrackHeader";
import TestProvider from "../../../TestProvider";

describe("TrackHeader", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <TrackHeader />
      </TestProvider>
    );
  });

  it("", () => {});
});
