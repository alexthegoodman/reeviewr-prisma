import * as React from "react";
import { render } from "enzyme";

import ProfileTabs from "./ProfileTabs";
import TestProvider from "../../modules/client/TestProvider";

describe("ProfileTabs", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <ProfileTabs />
      </TestProvider>
    );
  });

  it("", () => {});
});
