import * as React from "react";
import { render } from "enzyme";

import CheckboxField from "./CheckboxField";
import TestProvider from "../../modules/client/TestProvider";

describe("CheckboxField", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <CheckboxField />
      </TestProvider>
    );
  });

  it("", () => {});
});
