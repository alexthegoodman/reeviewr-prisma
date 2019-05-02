import * as React from "react";
import { render } from "enzyme";

import LikeButton from "./LikeButton";
import TestProvider from "../../modules/client/TestProvider";

describe("LikeButton", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <LikeButton />
      </TestProvider>
    );
  });

  it("", () => {});
});
