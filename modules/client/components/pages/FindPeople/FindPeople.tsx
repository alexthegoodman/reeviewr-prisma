import * as React from "react";

import CategoryGrid from "../../ui/CategoryGrid/CategoryGrid";
import UserCard from "../../ui/UserCard/UserCard";
import { FindPeopleProps } from "./FindPeople.d";

const FindPeople: React.FC<FindPeopleProps> = () => {
  return (
    <>
      <CategoryGrid title="People interested in Music">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </CategoryGrid>
      <CategoryGrid title="People interested in Painting">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </CategoryGrid>
      <CategoryGrid title="People interested in Video">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </CategoryGrid>
    </>
  );
};

export default FindPeople;
