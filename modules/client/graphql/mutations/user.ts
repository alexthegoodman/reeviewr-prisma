import gql from "graphql-tag";

export const UPDATE_USER_META = gql`
  mutation updateUserMeta($metaId: ID, $metaValue: String) {
    updateUserMeta(where: { id: $metaId }, data: { metaValue: $metaValue }) {
      id
      metaName
      metaValue
    }
  }
`;
