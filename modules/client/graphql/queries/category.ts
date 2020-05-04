import gql from "graphql-tag";

export const ALL_CATEGORIES = gql`
  query allCategories {
    categories {
      id
      itemName
    }
  }
`;

export const CATEGORIES_SPACES_POSTS = gql`
  query categoriesSpacesPosts {
    categories {
      id
      itemName
      spaces(first: 3) {
        id
        itemName
        itemMeta {
          id
          metaName
          metaValue
        }
        members {
          id
          userEmail
        }
        livePosts(first: 2) {
          id
          itemName
          itemUrlSegment
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
