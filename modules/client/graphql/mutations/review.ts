import gql from "graphql-tag";

export const ADD_REVIEW = gql`
  mutation addReview(
    $userId: ID!
    $trackId: ID!
    $itemName: String!
    $questionType1: String!
    $questionType2: String!
    $questionType3: String!
    $questionAnswer1: String!
    $questionAnswer2: String!
    $questionAnswer3: String!
    $preUserGenderDemo: String!
    $preUserFavDemo: String!
    $preUserExplicitDemo: String!
    $preUserAgeDemo: String!
    $preTrackId: String!
    $preAuthorId: String!
  ) {
    createReview(
      data: {
        user: { connect: { id: $userId } }
        userTrack: { connect: { id: $trackId } }
        itemType: "review"
        itemStatus: "publish"
        itemUrlSegment: $itemName
        itemMimeType: ""
        itemName: $itemName
        itemContent: "none"
        itemDeleted: false
        itemMeta: {
          create: [
            { metaName: "questionType1", metaValue: $questionType1 }
            { metaName: "questionType2", metaValue: $questionType2 }
            { metaName: "questionType3", metaValue: $questionType3 }
            { metaName: "questionAnswer1", metaValue: $questionAnswer1 }
            { metaName: "questionAnswer2", metaValue: $questionAnswer2 }
            { metaName: "questionAnswer3", metaValue: $questionAnswer3 }
            { metaName: "preUserGenderDemo", metaValue: $preUserGenderDemo }
            { metaName: "preUserFavDemo", metaValue: $preUserFavDemo }
            { metaName: "preUserExplicitDemo", metaValue: $preUserExplicitDemo }
            { metaName: "preUserAgeDemo", metaValue: $preUserAgeDemo }
            { metaName: "preTrackId", metaValue: $preTrackId }
            { metaName: "preAuthorId", metaValue: $preAuthorId }
          ]
        }
      }
    ) {
      id
      itemName
      userTrack {
        id
        itemName
      }
      user {
        id
        userEmail
      }
    }
  }
`;
