import gql from "graphql-tag";

export const DELETE_POST = gql`
  mutation deletePost($id: ID) {
    deleteOnePost(id: $id)
  }
`;
