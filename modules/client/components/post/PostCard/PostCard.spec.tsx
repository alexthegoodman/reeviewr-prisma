import * as React from "react";
import { render } from "enzyme";

import PostCard from "./PostCard";
import TestProvider from "../../modules/client/TestProvider";

describe("PostCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PostCard />
      </TestProvider>
    );
  });

  it("", () => {});
});
