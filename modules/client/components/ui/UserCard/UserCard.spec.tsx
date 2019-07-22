import * as React from "react";
import { render } from "enzyme";

import UserCard from "./UserCard";
import TestProvider from "../../modules/client/TestProvider";

describe("UserCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <UserCard />
      </TestProvider>
    );
  });

  it("", () => {});
});
