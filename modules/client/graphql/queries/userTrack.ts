import gql from "graphql-tag";

export const USER_TRACKS_QUERY = gql`
  query userTrack {
    userTracks(last: 10, where: { itemStatus: "publish" }) {
      id
      itemName
      user {
        id
        userMeta {
          id
          metaName
          metaValue
        }
      }
      itemMeta {
        id
        metaName
        metaValue
      }
      files {
        id
        itemName
        itemMeta(where: { metaName: "attachedFile" }) {
          metaName
          metaValue
        }
      }
      reviews(first: 3) {
        id
        itemName
        itemContent
        itemMeta {
          id
          metaName
          metaValue
        }
        user {
          id
          oldId
          userEmail
          userMeta {
            id
            metaName
            metaValue
          }
        }
      }
    }
  }
`;

export const COVER_IMAGE_QUERY = gql`
  query coverImage($oldId: String) {
    file(where: { oldId: $oldId }) {
      id
      itemName
      itemContent
      itemMeta {
        id
        metaName
        metaValue
      }
    }
  }
`;
