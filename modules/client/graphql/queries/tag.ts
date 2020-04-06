import gql from "graphql-tag";

export const ALL_TAGS = gql`
  query allTags {
    tags {
      id
      itemName
    }
  }
`;
