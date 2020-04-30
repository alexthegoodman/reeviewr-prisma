import * as React from "react";
import { render } from "enzyme";

import PostAudioViewer from "./PostAudioViewer";
import TestProvider from "../../modules/client/TestProvider";

describe("PostAudioViewer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <PostAudioViewer />
      </TestProvider>
    );
  });

  it("", () => {});
});
