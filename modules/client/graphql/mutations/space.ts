import gql from "graphql-tag";

export const DELETE_SPACE = gql`
  mutation deleteSpace($id: ID) {
    deleteOneSpace(id: $id)
  }
`;
