import gql from "graphql-tag";

// TODO: tracks with v2publish-noimage as status may be included on artist page but not on Home page (there's 4)

// considering optimizing which properties nee to be loaded in which areas

const UserFragments = {
  user: gql`
    fragment UserFragment on User {
      id
      userEmail
      userType
    }
  `,
};

// export const USER_POSTS_QUERY = gql`
//   query userPostsQuery($search: String) {
//     findManyPosts
//   }
// `;

export const USERS_QUERY = gql`
  query users($search: String) {
    findManyUser(
      first: 25
      where: {
        AND: [
          {
            userMeta_some: {
              metaName: "firstName"
              metaValue_contains: $search
            }
          }
        ]
      }
    ) {
      ...UserFragment
    }
  }
  ${UserFragments.user}
`;

export const USER_QUERY = gql`
  query findUser($id: ID) {
    findOneUser(where: { id: $id }) {
      ...UserFragment
    }
  }
  ${UserFragments.user}
`;

export const USER_PRIVATE_QUERY = gql`
  query privateUser($id: ID) {
    findOneUser(where: { id: $id }) {
      ...UserFragment
    }
  }
  ${UserFragments.user}
`;

export const USER_JOINED_PODS = gql`
  query userJoinedPods($id: ID) {
    findOneUser(where: { id: $id }) {
      memberOf {
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
      ...UserFragment
    }
  }
  ${UserFragments.user}
`;

export const USER_JOINED_PODS_POSTS = gql`
  query joinedPodsPosts($userId: ID, $postId: ID) {
    findOneUser(where: { id: $userId }) {
      ...UserFragment
      memberOfPosts(id: $userId, id: $postId) {
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
  ${UserFragments.user}
`;

export const SEARCH_USER_META = gql`
  query users($search: String) {
    findManyUserMeta(
      where: {
        metaName: { equals: "firstName" }
        metaValue: { contains: $search }
      }
    ) {
      user {
        id
        userEmail
      }
    }
  }
`;
