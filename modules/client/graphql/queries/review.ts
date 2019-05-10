import gql from "graphql-tag";

export const ALL_REVIEWS_QUERY = gql`
  query allReviews {
    reviews(
      first: 100
      orderBy: id_ASC
      where: {
        userTrack: {
          itemStatus: "v2publish"
          # OR: [
          #   {
          #     itemMeta_some: {
          #       metaName: "questionAnswer1"
          #       metaValue_contains: $search
          #     }
          #   }
          #   {
          #     itemMeta_some: {
          #       metaName: "questionAnswer2"
          #       metaValue_contains: $search
          #     }
          #   }
          #   {
          #     itemMeta_some: {
          #       metaName: "questionAnswer3"
          #       metaValue_contains: $search
          #     }
          #   }
          # ]
        }
      }
    ) {
      id
      itemName
      itemContent
      itemMeta {
        id
        metaName
        metaValue
      }
      userTrack {
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
      }
      user {
        id
        oldId
        userEmail
        files {
          id
          itemName
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
`;
