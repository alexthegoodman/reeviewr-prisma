import gql from "graphql-tag";

// TODO: create fragments (ex. review data on track on on own - except the userTrack prop on reviews is unique so maybe not)

export const USER_TRACKS_QUERY = gql`
  query userTracks {
    userTracks(
      first: 10
      orderBy: id_DESC
      where: { itemStatus: "v2publish" }
    ) {
      id
      itemName
      itemContent
      itemUrlSegment
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
        itemContent
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

export const USER_TRACK_QUERY = gql`
  query userTrack($id: ID!) {
    userTrack(where: { id: $id }) {
      id
      itemName
      itemContent
      itemUrlSegment
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
        itemContent
        itemMeta(where: { metaName: "attachedFile" }) {
          metaName
          metaValue
        }
      }
      reviews {
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
