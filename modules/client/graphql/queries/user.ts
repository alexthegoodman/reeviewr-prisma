import gql from "graphql-tag";

// TODO: tracks with v2publish-noimage as status may be included on artist page but not on Home page (there's 4)

// considering optimizing which properties nee to be loaded in which areas

const UserFragments = {
  user: gql`
    fragment UserFragment on User {
      id
      oldId
      userEmail
      userType
      files {
        id
        itemName
        itemContent
        itemMeta {
          metaName
          metaValue
        }
      }
      profilePages {
        id
        itemName
        itemContent
        itemMeta {
          id
          metaName
          metaValue
        }
      }
      reviews {
        id
      }
      userTracks(where: { id_not: "", itemStatus: "v2publish" }) {
        id
      }
      userMeta {
        id
        metaName
        metaValue
      }
    }
  `,
};

export const USERS_QUERY = gql`
  query users($search: String) {
    users(
      first: 25
      where: {
        userTracks_some: { id_not: "", itemStatus: "v2publish" }
        AND: [
          { userMeta_some: { metaName: "firstName", metaValue_not: "" } }
          {
            userMeta_some: {
              metaName: "userArtistName"
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
  query user($id: ID) {
    user(where: { id: $id }) {
      ...UserFragment
    }
  }
  ${UserFragments.user}
`;

export const USER_PRIVATE_QUERY = gql`
  query privateUser($privateHash: String) {
    user(where: { privateHash: $privateHash }) {
      ...UserFragment
    }
  }
  ${UserFragments.user}
`;

export const INDIVIDUAL_USERS_QUERY = gql`
  query individualUsers($userIds: [ID!]) {
    users(first: 10, orderBy: id_DESC, where: { oldId_in: $userIds }) {
      ...UserFragment
    }
  }
  ${UserFragments.user}
`;
