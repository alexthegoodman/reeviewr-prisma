import * as React from "react";
import { render } from "enzyme";

import GenComponent from "./GenComponent";

describe("GenComponent", () => {
  it("Should render", () => {
    const wrapper = render(<GenComponent />);
  });
});
