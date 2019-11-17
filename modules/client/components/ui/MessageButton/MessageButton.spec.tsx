import * as React from "react";
import { render } from "enzyme";

import MessageButton from "./MessageButton";
import TestProvider from "../../modules/client/TestProvider";

describe("MessageButton", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <MessageButton />
      </TestProvider>
    );
  });

  it("", () => {});
});
