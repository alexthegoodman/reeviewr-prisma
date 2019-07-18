import * as React from "react";
import { storiesOf } from "@storybook/react";
import ArtistCard from "./ArtistCard";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("ArtistCard", () => (
  <TestProvider>
    <ArtistCard
      imageUrl={"https://via.placeholder.com/100"}
      artistTitle={"Artist Title"}
      reviewCount={10}
      trackCount={5}
      onClick={() => console.info("onClick")}
    />
  </TestProvider>
));
