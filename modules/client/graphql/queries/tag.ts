import gql from "graphql-tag";

export const ALL_TAGS = gql`
  query allTags {
    findManyTag {
      id
      itemName
    }
  }
`;
