import gql from "graphql-tag";

export const GET_NOTIFICATIONS = gql`
  query notifications($id: String) {
    findManyNotification(where: { user: { id: { equals: $id } } }) {
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