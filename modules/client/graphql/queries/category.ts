import gql from "graphql-tag";

export const ALL_CATEGORIES = gql`
  query allCategories {
    findManyCategory {
      id
      itemName
    }
  }
`;
