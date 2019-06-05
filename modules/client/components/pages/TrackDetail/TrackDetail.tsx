import * as React from "react";

import { TrackDetailProps, Question } from "./TrackDetail.d";
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";
import { USER_TRACK_QUERY } from "../../../graphql/queries/userTrack";
import { useQuery } from "react-apollo-hooks";
import UserTrack from "../../data/UserTrack/UserTrack";
import GraphCardData from "../../data/GraphCardData/GraphCardData";
import Legacy from "../../../../services/Legacy";
import { Text } from "@blueprintjs/core";
import Strings from "../../../services/Strings";
import LoadingIndicator from "../../ui/LoadingIndicator/LoadingIndicator";

const TrackDetail: React.FC<TrackDetailProps> = () => {
  const strings = new Strings();
  const legacy = new Legacy();

  let route = useCurrentRoute();
  let loadingRoute = useLoadingRoute();
  let navigation = useNavigation();

  const { trackId, name } = route.lastChunk.request.params;

  const {
    data: trackData,
    error: trackError,
    loading: trackLoading,
  } = useQuery(USER_TRACK_QUERY, { variables: { id: trackId } });

  if (trackLoading) {
    return <LoadingIndicator loadingText="Loading track..." />;
  }
  if (trackError) {
    return <div>Error on track! {trackError.message}</div>;
  }

  // assemble data
  const metaList = legacy.extractMultipleMeta(trackData.userTrack.itemMeta, [
    "questionCount",
    "theOption",
    "audioId",
    "genre",
    "artId",
    "questionContent3",
    "questionOne3",
    "questionTwo3",
    "questionThree3",
    "questionFour3",
    "questionContent2",
    "questionOne2",
    "questionTwo2",
    "questionThree2",
    "questionFour2",
    "questionContent1",
    "questionOne1",
    "questionTwo1",
    "questionThree1",
    "questionFour1",
    "paid",
    "reviewCount",
    "reviewedBy",
  ]);

  const questionData: Question[] = [
    {
      content: metaList["questionContent1"],
      type: null,
      one: metaList["questionOne1"],
      two: metaList["questionTwo1"],
      three: metaList["questionThree1"],
      four: metaList["questionFour1"],
      reviews: {
        type: null,
        items: [],
      },
    },
    {
      content: metaList["questionContent2"],
      type: null,
      one: metaList["questionOne2"],
      two: metaList["questionTwo2"],
      three: metaList["questionThree2"],
      four: metaList["questionFour2"],
      reviews: {
        type: null,
        items: [],
      },
    },
    {
      content: metaList["questionContent3"],
      type: null,
      one: metaList["questionOne3"],
      two: metaList["questionTwo3"],
      three: metaList["questionThree3"],
      four: metaList["questionFour3"],
      reviews: {
        type: null,
        items: [],
      },
    },
  ];

  trackData.userTrack.reviews.forEach(review => {
    // assemble data
    const reviewMetaList = legacy.extractMultipleMeta(review.itemMeta, [
      "preTrackId",
      "preAuthorId",
      "preUserFavDemo",
      "preUserGenderDemo",
      "preUserAgeDemo",
      "preUserExplicitDemo",
      "questionType3",
      "questionAnswer3",
      "questionType2",
      "questionAnswer2",
      "questionType1",
      "questionAnswer1",
    ]);

    // assemble review aggregate categorized by question
    // console.info("reviewMetaList", reviewMetaList);
    for (let i = 0; i <= 2; i++) {
      questionData[i].type = reviewMetaList["questionType" + (i + 1)];
      questionData[i].reviews.type = reviewMetaList["questionType" + (i + 1)];
      questionData[i].reviews.items[questionData[i].reviews.items.length] = {
        trackId: reviewMetaList["preTrackId"],
        authorOldId: reviewMetaList["preAuthorId"],
        userFavDemo: reviewMetaList["preUserFavDemo"],
        userGenderDemo: reviewMetaList["preUserGenderDemo"],
        userAgeDemo: reviewMetaList["preUserAgeDemo"],
        userExplicitDemo: reviewMetaList["preUserExplicitDemo"],
        answer: reviewMetaList["questionAnswer" + (i + 1)],
      };
    }
  });

  // console.info("questionData", questionData);

  return (
    <>
      {/** TODO: Add Review button in red near top of page as well */}
      <UserTrack track={trackData.userTrack} reviewLimit={null}>
        {questionData.map((question, i) => {
          return (
            <section key={i}>
              <Text tagName={`h2`}>{strings.decode(question.content)}</Text>
              <GraphCardData question={questionData[i]} />
            </section>
          );
        })}
        <Text tagName={`h2`}>Individual Reviews</Text>
      </UserTrack>
    </>
  );
};

export default TrackDetail;
