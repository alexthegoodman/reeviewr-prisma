import gql from "graphql-tag";

// export const UPDATE_USER_META = gql`
//   mutation updateUserMeta($metaId: ID, $metaValue: String) {
//     updateUserMeta(where: { id: $metaId }, data: { metaValue: $metaValue }) {
//       id
//       metaName
//       metaValue
//     }
//   }
// `;

// export const CREATE_USER_META = gql`
//   mutation createUserMeta(
//     $userId: ID!
//     $metaName: String!
//     $metaValue: String!
//   ) {
//     createUserMeta(
//       data: {
//         user: { connect: { id: $userId } }
//         metaName: $metaName
//         metaValue: $metaValue
//       }
//     ) {
//       id
//       metaName
//       metaValue
//     }
//   }
// `;

export const JOIN_SPACE = gql`
  mutation joinSpace($userId: ID, $spaceId: ID) {
    updateOneUser(
      where: { id: $userId }
      data: { memberOf: { connect: { id: $spaceId } } }
    ) {
      id
    }
  }
`;

export const LEAVE_SPACE = gql`
  mutation leaveSpace($userId: ID, $spaceId: ID) {
    updateOneUser(
      where: { id: $userId }
      data: { memberOf: { disconnect: { id: $spaceId } } }
    ) {
      id
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID) {
    deleteOneUser(id: $id)
  }
`;
