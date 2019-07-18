import { render } from "enzyme";
import * as React from "react";

import TestProvider from "../../../TestProvider";
import AddReview from "./AddReview";

describe("AddReview", () => {
  let wrapper;
  const callback = jest.fn();

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <AddReview
          imageUrl="https://via.placeholder.com/100"
          onClick={callback}
        />
      </TestProvider>
    );
  });

  it("Should display the image provided", () => {
    expect(wrapper.find(".addReview img")).toHaveLength(1);
    expect(wrapper.find(".addReview img").prop("src")).not.toEqual("");
  });

  it("Should run the callback when clicked", () => {
    expect(callback).not.toHaveBeenCalled();
    wrapper.find(".addReview").simulate("click");
    expect(callback).toHaveBeenCalled();
  });
});
