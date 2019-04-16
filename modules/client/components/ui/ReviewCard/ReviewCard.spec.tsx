import * as React from "react";
import { render } from "enzyme";

import ReviewCard from "./ReviewCard";
import TestProvider from "../../../TestProvider";

describe("ReviewCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <ReviewCard
          artistTitle="Artist Title"
          answerPreview="Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo."
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
