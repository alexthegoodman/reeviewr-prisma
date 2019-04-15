import * as React from "react";
import { render } from "enzyme";

import ProfileItem from "./ProfileItem";
import TestProvider from "../../../TestProvider";

describe("ProfileItem", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <ProfileItem />
      </TestProvider>
    );
  });

  it("", () => {});
});
