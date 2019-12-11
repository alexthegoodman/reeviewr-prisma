import gql from "graphql-tag";

export const DELETE_POD = gql`
  mutation deletePod($id: ID) {
    deleteOnePod(id: $id)
  }
`;
