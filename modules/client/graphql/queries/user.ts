import gql from "graphql-tag";

// TODO: tracks with v2publish-noimage as status may be included on artist page but not on Home page (there's 4)

export const USERS_QUERY = gql`
  query users {
    users(
      first: 25
      where: {
        userTracks_some: { id_not: "", itemStatus: "v2publish" }
        userMeta_some: { metaName: "firstName", metaValue_not: "" }
      }
    ) {
      id
      userEmail
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
        metaName
        metaValue
      }
    }
  }
`;
