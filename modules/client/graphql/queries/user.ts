import gql from "graphql-tag";

export const USERS_QUERY = gql`
  query users {
    users(
      first: 10
      where: {
        userTracks_some: { id_not: "" }
        userMeta_some: { metaName: "firstName", metaValue_not: "" }
      }
    ) {
      id
      userEmail
      files {
        id
        itemName
        itemContent
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
      userTracks {
        id
      }
      userMeta {
        metaName
        metaValue
      }
    }
  }
`;
