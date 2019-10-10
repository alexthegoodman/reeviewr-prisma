import gql from "graphql-tag";

export const GET_THREADS = gql`
  query threads {
    findManyThread {
      id
      itemName
      itemContent
      user {
        id
        userEmail
      }
      itemMeta {
        id
        metaName
        metaValue
      }
      messages {
        id
        itemName
        itemContent
        user {
          id
          userEmail
        }
        itemMeta {
          id
          metaName
          metaValue
        }
      }
    }
  }
`;
