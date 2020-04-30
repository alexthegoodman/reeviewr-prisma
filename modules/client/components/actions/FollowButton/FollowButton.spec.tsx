import * as React from "react";
import { render } from "enzyme";

import FollowButton from "./FollowButton";
import TestProvider from "../../modules/client/TestProvider";

describe("FollowButton", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <FollowButton />
      </TestProvider>
    );
  });

  it("", () => {});
});
