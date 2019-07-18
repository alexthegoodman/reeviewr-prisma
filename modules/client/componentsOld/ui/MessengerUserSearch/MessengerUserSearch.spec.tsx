import * as React from "react";
import { render } from "enzyme";

import MessengerUserSearch from "./MessengerUserSearch";
import TestProvider from "../../modules/client/TestProvider";

describe("MessengerUserSearch", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <MessengerUserSearch />
      </TestProvider>
    );
  });

  it("", () => {});
});
