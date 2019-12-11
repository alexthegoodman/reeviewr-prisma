import gql from "graphql-tag";

export const GET_NOTIFICATIONS = gql`
  query notifications($id: String, $first: Int) {
    findManyNotification(
      where: { receiver: { id: { equals: $id } } }
      first: $first
    ) {
      id
      itemName
      itemContent
      sender {
        id
        userEmail
        userMeta {
          id
          metaName
          metaValue
        }
      }
      receiver {
        id
        userEmail
        userMeta {
          id
          metaName
          metaValue
        }
      }
      pod {
        id
        itemName
        itemMeta {
          id
          metaName
          metaValue
        }
      }
      post {
        id
        itemName
        itemUrlSegment
        itemMeta {
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
    }
  }
`;
