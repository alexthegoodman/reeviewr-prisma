import gql from "graphql-tag";

const PostFragments = {
  post: gql`
    fragment PostFragment on Post {
      id
      user {
        id
        userEmail
      }
      pod {
        id
        itemName
      }
      itemType
      itemStatus
      itemUrlSegment
      itemMimeType
      itemName
      itemContent
      itemDeleted
      itemMeta {
        id
        metaName
        metaValue
      }
      tags {
        id
        itemName
      }
      favorites {
        id
        itemName
      }
      reviews {
        id
        itemName
      }
      annotations {
        id
        itemName
      }
      questions {
        id
        itemName
      }

      createdAt
      updatedAt
    }
  `,
};

export const POSTS_QUERY = gql`
  query posts($search: String) {
    posts(where: { itemName: { contains: $search } }) {
      ...PostFragment
    }
  }
  ${PostFragments.post}
`;

export const POST_QUERY = gql`
  query post($postId: ID) {
    post(where: { id: $postId }) {
      ...PostFragment
    }
  }
  ${PostFragments.post}
`;

// export const SEARCH_POSTS = gql`
//   query posts($search: String) {
//     findManyPostMeta(where: { itemName: $search }) {
//       id

//     }
//   }
// `;
