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
      posts {
        id
        itemName
        itemMeta {
          id
          metaName
          metaValue
        }
      }
      members  {
        id
        userEmail
      }
    }
  `,
};

export const ALL_PODS = gql`
  query allPods {
    findManyPod {
      ...PodFragment
    }
  }
  ${PodFragments.pod}
`;

export const SEARCH_PODS = gql`
  query pods($search: String) {
    findManyPod(where: { itemName: { contains: $search } }) {
      ...PodFragment
    }
  }
  ${PodFragments.pod}
`;
