import gql from "graphql-tag";

// TODO: tracks with v2publish-noimage as status may be included on artist page but not on Home page (there's 4)

// considering optimizing which properties nee to be loaded in which areas

const UserFragments = {
  user: gql`
    fragment UserFragment on User {
      id
      userType
      userEmail
      userConfirmed
      userMeta {
        id
        metaName
        metaValue
      }
      posts {
        id
        itemName
        itemContent
      }
      spaces {
        id
        itemName
        itemContent
      }
      favorites {
        id
        itemName
        itemContent
      }
      reviews {
        id
        itemName
        itemContent
      }
      annotations {
        id
        itemName
        itemContent
      }
      questions {
        id
        itemName
        itemContent
      }
      threads {
        id
        itemName
        itemContent
      }
      notifications {
        id
        itemName
        itemContent
      }
      following {
        id
        userEmail
      }
      followers {
        id
        userEmail
      }
      sentNotifications {
        id
        itemName
        itemContent
      }
      recievedNotifications {
        id
        itemName
        itemContent
      }

      createdAt
      updatedAt
    }
  `,
};

// export const USER_POSTS_QUERY = gql`
//   query userPostsQuery($search: String) {
//     findManyPosts
//   }
// `;

// export const USERS_QUERY = gql`
//   query users($search: String) {
//     findManyUser(
//       first: 25
//       where: {
//         AND: [
//           {
//             userMeta_some: {
//               metaName: "firstName"
//               metaValue_contains: $search
//             }
//           }
//         ]
//       }
//     ) {
//       ...UserFragment
//     }
//   }
//   ${UserFragments.user}
// `;

export const USER_QUERY = gql`
  query findUser($id: String) {
    user(where: { id: $id }) {
      ...UserFragment
    }
  }
  ${UserFragments.user}
`;

export const USER_PRIVATE_QUERY = gql`
  query privateUser($id: String) {
    user(where: { id: $id }) {
      ...UserFragment
    }
  }
  ${UserFragments.user}
`;

export const USER_JOINED_SPACES = gql`
  query userJoinedSpaces($id: String) {
    user(where: { id: $id }) {
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
        # livePosts(first: 2) {
        #   id
        #   itemName
        #   itemUrlSegment
        #   itemMeta {
        #     id
        #     metaName
        #     metaValue
        #   }
        # }
      }
      ...UserFragment
    }
  }
  ${UserFragments.user}
`;

export const USER_JOINED_SPACES_POSTS = gql`
  query joinedSpacesPosts($userId: String, $postId: String) {
    user(where: { id: $userId }) {
      ...UserFragment
      memberOfPosts(userId: $userId, postId: $postId) {
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

// export const SEARCH_USER_META = gql`
//   query searchUserMeta($search: String) {
//     users(
//       where: {
//         userMeta: {
//           metaName: { equals: "firstName" }
//           metaValue: { contains: $search }
//         }
//       }
//     ) {
//       id
//       userEmail
//     }
//   }
// `;

export const SEARCH_USER_META = gql`
  query searchUserMeta {
    users {
      id
      userEmail
    }
  }
`;
