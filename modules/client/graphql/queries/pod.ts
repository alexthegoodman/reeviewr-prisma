import gql from "graphql-tag";

export const ALL_PODS = gql`
  query allPods {
    findManyPod {
      id
      itemName
    }
  }
`;
