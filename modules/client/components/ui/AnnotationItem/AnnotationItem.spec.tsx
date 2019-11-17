import * as React from "react";
import { render } from "enzyme";

import AnnotationItem from "./AnnotationItem";
import TestProvider from "../../modules/client/TestProvider";

describe("AnnotationItem", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <AnnotationItem />
      </TestProvider>
    );
  });

  it("", () => {});
});
