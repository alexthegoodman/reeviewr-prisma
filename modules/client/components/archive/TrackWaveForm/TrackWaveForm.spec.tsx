import * as React from "react";
import { render } from "enzyme";

import TrackWaveForm from "./TrackWaveForm";
import TestProvider from "../../../TestProvider";

describe("TrackWaveForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <TrackWaveForm />
      </TestProvider>
    );
  });

  it("", () => {});
});
