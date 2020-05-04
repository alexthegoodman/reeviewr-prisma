import gql from "graphql-tag";

const SpaceFragments = {
  space: gql`
    fragment SpaceFragment on Space {
      id
      itemName
      itemContent
      itemMeta {
        id
        metaName
        metaValue
      }
      # livePosts {
      posts {
        id
        itemName
        itemUrlSegment
        itemMeta {
          id
          metaName
          metaValue
        }
      }
      members {
        id
        userEmail
      }
    }
  `,
};

export const ALL_SPACES = gql`
  query allSpaces {
    spaces {
      ...SpaceFragment
    }
  }
  ${SpaceFragments.space}
`;

export const SEARCH_SPACES = gql`
  query spaces($search: String) {
    spaces(where: { itemName: { contains: $search } }) {
      ...SpaceFragment
    }
  }
  ${SpaceFragments.space}
`;
