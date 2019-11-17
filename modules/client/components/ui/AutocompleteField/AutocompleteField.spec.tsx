import * as React from "react";
import { render } from "enzyme";

import AutocompleteField from "./AutocompleteField";
import TestProvider from "../../modules/client/TestProvider";

describe("AutocompleteField", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <AutocompleteField />
      </TestProvider>
    );
  });

  it("", () => {});
});
