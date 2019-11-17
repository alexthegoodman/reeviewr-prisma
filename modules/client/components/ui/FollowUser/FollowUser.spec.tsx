import * as React from "react";
import { render } from "enzyme";

import FollowUser from "./FollowUser";
import TestProvider from "../../modules/client/TestProvider";

describe("FollowUser", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <FollowUser />
      </TestProvider>
    );
  });

  it("", () => {});
});
