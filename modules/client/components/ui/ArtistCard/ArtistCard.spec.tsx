import * as React from "react";
import { render } from "enzyme";

import ArtistCard from "./ArtistCard";
import TestProvider from "../../../TestProvider";

describe("ArtistCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <ArtistCard
          imageUrl={"/src/"}
          artistTitle={"Artist Title"}
          reviewCount={10}
          trackCount={5}
        />
      </TestProvider>
    );
  });

  it("Should render image, name, review count, and track count", () => {});

  it("Should run onClick handler when clicked", () => {});
});
