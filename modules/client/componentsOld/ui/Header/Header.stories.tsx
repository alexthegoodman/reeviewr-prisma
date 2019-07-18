import * as React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./Header";
import TestProvider from "../../../TestProvider";
import ProfileItem from "../ProfileItem/ProfileItem";
import BeyondSearch from "../BeyondSearch/BeyondSearch";
import { Button } from "@blueprintjs/core";

const stories = storiesOf("UI Components", module);

stories.add("Header", () => (
  <TestProvider>
    <Header
      leftElements={
        <>
          <ProfileItem
            className="headerItem"
            imageUrl="https://via.placeholder.com/100"
            name="Regina Spektor"
          />
          <BeyondSearch />
        </>
      }
      rightElements={
        <Button className="textButton headerItem" minimal={true}>
          How it Works
        </Button>
      }
    />
  </TestProvider>
));
