import gql from "graphql-tag";

export const DELETE_THREAD = gql`
  mutation deleteThead($id: ID) {
    deleteOneThread(id: $id)
  }
`;
