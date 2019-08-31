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

// export const USERS_QUERY = gql`
//   query users($search: String) {
//     findManyUser(
//       first: 25
//       where: {
//         AND: [
//           # { userMeta_some: { metaName: "firstName", metaValue_not: "" } }
//           { userTracks_some: { id_not: "", itemStatus: "v2publish" } }
//           {
//             userMeta_some: {
//               metaName: "userArtistName"
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
  query findUser($id: ID) {
    findOneUser(where: { id: $id }) {
      ...UserFragment
    }
  }
  ${UserFragments.user}
`;

export const USER_PRIVATE_QUERY = gql`
  query privateUser($privateHash: String) {
    findOneUser(where: { privateHash: $privateHash }) {
      ...UserFragment
    }
  }
  ${UserFragments.user}
`;

export const USER_JOINED_PODS = gql`
  query userJoinedPods($privateHash: String) {
    findOneUser(where: { privateHash: $privateHash }) {
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
