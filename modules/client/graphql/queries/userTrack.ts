import gql from "graphql-tag";

// TODO: create fragments (ex. review data on track on on own - except the userTrack prop on reviews is unique so maybe not)
const UserTrackFragments = {
  userTrack: gql`
    fragment UserTrackFragment on UserTrack {
      id
      oldId
      itemName
      itemContent
      itemUrlSegment
      user {
        id
        oldId
        userMeta {
          id
          metaName
          metaValue
        }
      }
      itemMeta {
        id
        metaName
        metaValue
      }
      files {
        id
        itemName
        itemContent
        itemMeta(where: { metaName: "attachedFile" }) {
          metaName
          metaValue
        }
      }
      reviews(first: 1000) {
        id
        itemName
        itemContent
        itemMeta {
          id
          metaName
          metaValue
        }
        user {
          id
          oldId
          userEmail
          files {
            id
            itemName
            itemContent
            itemMeta {
              id
              metaName
              metaValue
            }
          }
          profilePages {
            id
            itemName
            itemContent
            itemMeta {
              id
              metaName
              metaValue
            }
          }
          userMeta {
            id
            metaName
            metaValue
          }
        }
      }
    }
  `,
};

export const USER_TRACKS_QUERY = gql`
  query userTracks($search: String) {
    userTracks(
      first: 10
      orderBy: createdAt_DESC
      where: { itemStatus: "v2publish", itemName_contains: $search }
    ) {
      ...UserTrackFragment
    }
  }
  ${UserTrackFragments.userTrack}
`;

export const USER_TRACKS_GENRE_QUERY = gql`
  query userTracksGenre($genre: String) {
    userTracks(
      first: 10
      orderBy: createdAt_DESC
      where: {
        itemStatus: "v2publish"
        itemMeta_some: { metaName: "genre", metaValue_contains: $genre }
      }
    ) {
      ...UserTrackFragment
    }
  }
  ${UserTrackFragments.userTrack}
`;

export const USER_TRACK_QUERY = gql`
  query userTrack($id: ID!) {
    userTrack(where: { id: $id }) {
      ...UserTrackFragment
    }
  }
  ${UserTrackFragments.userTrack}
`;

export const ARTIST_TRACKS_QUERY = gql`
  query artistTracks($artistId: ID!) {
    userTracks(
      first: 10
      orderBy: id_DESC
      where: { user: { id: $artistId }, itemStatus: "v2publish" }
    ) {
      ...UserTrackFragment
    }
  }
  ${UserTrackFragments.userTrack}
`;

export const INDIVIDUAL_TRACKS_QUERY = gql`
  query individualTracks($trackIds: [String!]) {
    userTracks(
      first: 10
      orderBy: id_DESC
      where: { oldId_in: $trackIds, itemStatus: "v2publish" }
    ) {
      ...UserTrackFragment
    }
  }
  ${UserTrackFragments.userTrack}
`;

export const FILE_QUERY = gql`
  query file($oldId: String) {
    file(where: { oldId: $oldId }) {
      id
      itemName
      itemContent
      itemMeta {
        id
        metaName
        metaValue
      }
    }
  }
`;
