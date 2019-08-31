import gql from "graphql-tag";

// const posts = await ctx.photon.posts.findMany({
//       where: { pod: { members: { every: { privateHash } } } },
//     });

export const JOINED_PODS_POSTS = gql`
  query joinedPodsPosts($privateHash: String) {
    findManyPost(
      where: { pod: { members: { every: { privateHash: $privateHash } } } }
    ) {
      id
      itemName
    }
  }
`;
