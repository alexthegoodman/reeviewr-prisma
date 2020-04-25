import gql from "graphql-tag";

const PodFragments = {
  pod: gql`
    fragment PodFragment on Pod {
      id
      itemName
      itemContent
      itemMeta {
        id
        metaName
        metaValue
      }
      # livePosts {
      posts {
        id
        itemName
        itemUrlSegment
        itemMeta {
          id
          metaName
          metaValue
        }
      }
      members {
        id
        userEmail
      }
    }
  `,
};

export const ALL_PODS = gql`
  query allPods {
    pods {
      ...PodFragment
    }
  }
  ${PodFragments.pod}
`;

export const SEARCH_PODS = gql`
  query pods($search: String) {
    pods(where: { itemName: { contains: $search } }) {
      ...PodFragment
    }
  }
  ${PodFragments.pod}
`;
