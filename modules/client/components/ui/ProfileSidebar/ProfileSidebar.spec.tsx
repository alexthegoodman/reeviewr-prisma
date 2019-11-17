import * as React from "react";
import { render } from "enzyme";

import ProfileSidebar from "./ProfileSidebar";
import TestProvider from "../../modules/client/TestProvider";

describe("ProfileSidebar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <ProfileSidebar />
      </TestProvider>
    );
  });

  it("", () => {});
});
