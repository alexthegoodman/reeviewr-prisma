import * as React from "react";
import { render } from "enzyme";

import ProfileItem from "./ProfileItem";
import TestProvider from "../../../TestProvider";

describe("ProfileItem", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <ProfileItem
          imageUrl="https://via.placeholder.com/100"
          name="Alex Woodman"
        />
      </TestProvider>
    );
  });

  it("Should render image and name", () => {});

  it("Should run the callback when clicked", () => {});
});
