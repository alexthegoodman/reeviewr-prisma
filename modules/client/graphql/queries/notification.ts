import gql from "graphql-tag";

export const GET_NOTIFICATIONS = gql`
  query notifications($id: String, $first: Int) {
    findManyNotification(where: { user: { id: { equals: $id } } }, first: $first) {
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