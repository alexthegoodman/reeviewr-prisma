import gql from "graphql-tag";

export const ALL_CATEGORIES = gql`
  query allCategories {
    findManyCategory {
      id
      itemName
    }
  }
`;

export const CATEGORIES_PODS_POSTS = gql`
  query categoriesPodsPosts {
    findManyCategory {
      id
      itemName
      pods(first: 3) {
        id
        itemName
        itemMeta {
          id
          metaName
          metaValue
        }
        posts(first: 2) {
          id
          itemName
          itemMeta {
            id
            metaName
            metaValue
          }
        }
      }
    }
  }
`;
