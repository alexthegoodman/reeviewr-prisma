import * as React from "react";
import { render } from "enzyme";

import TrackHeader from "./TrackHeader";
import TestProvider from "../../../TestProvider";

describe("TrackHeader", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <TrackHeader trackTitle="Blue Boats" artistName="Regina Spektor" />
      </TestProvider>
    );
  });

  it("Renders the provided title and name", () => {});

  it("Runs the respective callback when title and name are clicked", () => {});
});
