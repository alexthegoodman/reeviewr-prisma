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
