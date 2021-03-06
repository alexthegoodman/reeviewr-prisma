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
      posts(first: 2, where: { itemDeleted: { equals: false } }) {
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
        userType
        userEmail
        userConfirmed
        posts {
          id
          itemName
        }
        userMeta {
          id
          metaName
          metaValue
        }
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
