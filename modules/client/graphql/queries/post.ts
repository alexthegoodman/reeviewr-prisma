import gql from "graphql-tag";

export const POSTS_QUERY = gql`
  query posts($search: String) {
    findManyPost(where: { itemName: { contains: $search } }) {
      id
      itemUrlSegment
    }
  }
`;

// export const SEARCH_POSTS = gql`
//   query posts($search: String) {
//     findManyPostMeta(where: { itemName: $search }) {
//       id

//     }
//   }
// `;
