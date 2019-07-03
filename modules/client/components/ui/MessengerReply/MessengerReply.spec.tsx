import * as React from "react";
import { render } from "enzyme";

import MessengerReply from "./MessengerReply";
import TestProvider from "../../modules/client/TestProvider";

describe("MessengerReply", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <MessengerReply />
      </TestProvider>
    );
  });

  it("", () => {});
});
