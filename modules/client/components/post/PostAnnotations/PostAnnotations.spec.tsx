import * as React from "react";
import { render } from "enzyme";

import PostAnnotations from "./PostAnnotations";
import TestProvider from "../../modules/client/TestProvider";

describe("PostAnnotations", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PostAnnotations />
      </TestProvider>
    );
  });

  it("", () => {});
});
