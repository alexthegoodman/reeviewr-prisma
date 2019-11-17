import * as React from "react";
import { render } from "enzyme";

import ReviewParticipants from "./ReviewParticipants";
import TestProvider from "../../../TestProvider";

describe("ReviewParticipants", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <ReviewParticipants
          reviewerImageUrl="/src/"
          reviewerAltText="Artist Name"
          trackImageUrl="/src/"
          trackAltText="Track Title"
        />
      </TestProvider>
    );
  });

  it("", () => {});
});
