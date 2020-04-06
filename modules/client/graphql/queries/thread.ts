import gql from "graphql-tag";

export const GET_THREADS = gql`
  query threads {
    threads {
      id
      itemName
      itemContent
      participants {
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
