import * as React from "react";
import { render } from "enzyme";

import NotificationItem from "./NotificationItem";
import TestProvider from "../../modules/client/TestProvider";

describe("NotificationItem", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <NotificationItem />
      </TestProvider>
    );
  });

  it("", () => {});
});
