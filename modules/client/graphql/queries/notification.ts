import gql from "graphql-tag";

export const GET_NOTIFICATIONS = gql`
  query notifications($id: String, $first: Int) {
    findManyNotification(where: { user: { id: { equals: $id } } }, first: $first) {
      id
      itemName
      itemContent
      sender {
        id
        userEmail
        userMeta {
          id
          itemName
          itemValue
        }
      }
      receiver {
        id
        userEmail
        userMeta {
          id
          itemName
          itemValue
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