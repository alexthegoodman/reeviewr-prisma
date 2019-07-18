import * as React from "react";
import { render } from "enzyme";

import TextareaField from "./TextareaField";
import TestProvider from "../../modules/client/TestProvider";

describe("TextareaField", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <TextareaField />
      </TestProvider>
    );
  });

  it("", () => {});
});
