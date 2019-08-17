import * as React from "react";

import { Dialog, Text } from "@blueprintjs/core";
import { Image } from "cloudinary-react";
import { useQuery } from "@apollo/react-hooks";
import { ImageSizes } from "../../../../defs/imageSizes";
import Core from "../../../../services/Core";
import Legacy from "../../../../services/Legacy";
import Utility from "../../../../services/Utility";
import { useAppContext } from "../../../context";
import { FILE_QUERY } from "../../../graphql/queries/userTrack";
import Strings from "../../../services/Strings";
import ReviewCard from "../../ui/ReviewCard/ReviewCard";
import { ReviewCardDataProps } from "./ReviewCardData.d";

const ReviewCardData: React.FC<ReviewCardDataProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  review,
  node = 0,
  track = null,
  trackImageUrl = "",
  trackAltText = "",
}) => {
  const legacy = new Legacy();
  const strings = new Strings();
  const core = new Core();
  const utility = new Utility();

  const clickHandler = e => onClick(e);

  const [{ mixpanel }, dispatch] = useAppContext();
  const [modelOpen, setModelOpen] = React.useState(false);

  let trackId = null;
  let trackMetaList = null;
  if (
    track == null &&
    trackImageUrl === "" &&
    utility.isDefinedWithContent(review.userTrack)
  ) {
    const track = review.userTrack;
    trackId = review.userTrack.id;
    trackImageUrl = core.extractCoverArt(track);
    trackAltText = track.itemName;

    trackMetaList = legacy.extractMultipleMeta(review.userTrack.itemMeta, [
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
  } else if (track !== null) {
    trackMetaList = legacy.extractMultipleMeta(track.itemMeta, [
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
  }

  if (review.user !== null) {
    const userMetaList = legacy.extractMultipleMeta(review.user.userMeta, [
      "firstName",
      "lastName",
      "userArtistName",
      "profileImage",
    ]);

    const reviewMetaList = legacy.extractMultipleMeta(review.itemMeta, [
      "questionType1",
      "questionAnswer1",
      "questionType2",
      "questionAnswer2",
      "questionType3",
      "questionAnswer3",
    ]);

    const fullName = `${userMetaList["firstName"]} ${userMetaList["lastName"]}`;

    let profileImage = userMetaList["profileImage"];
    if (profileImage === "") {
      profileImage = "https://via.placeholder.com/100";
    }

    return (
      <>
        <ReviewCard
          artistTitle={
            userMetaList["userArtistName"] !== ""
              ? userMetaList["userArtistName"]
              : fullName
          }
          node={node + 1}
          trackMetaList={trackMetaList}
          reviewMetaList={reviewMetaList}
          reviewerImageUrl={profileImage}
          reviewerAltText={fullName}
          reviewerId={review.user.id}
          trackImageUrl={trackImageUrl}
          trackAltText={trackAltText}
          trackId={trackId}
          onClick={e => {
            // clickHandler(e);
            mixpanel.track("Open review card modal", {
              env: process.env.NODE_ENV,
              time: new Date(),
            });
            setModelOpen(true);
          }}
        />
        {trackMetaList !== null ? (
          <Dialog
            isOpen={modelOpen}
            title={"Review Detail"}
            canEscapeKeyClose={true}
            canOutsideClickClose={true}
            onClose={() => setModelOpen(false)}
          >
            <section className="dialog-body">
              {[1, 2, 3].map(node => {
                let answer = strings.decode(
                  reviewMetaList[`questionAnswer${node}`]
                );
                if (reviewMetaList[`questionType${node}`] === "rating") {
                  answer = `${strings.decode(
                    reviewMetaList[`questionAnswer${node}`]
                  )}/10`;
                }

                if (reviewMetaList[`questionType${node}`] === "mult_choice") {
                  answer = strings.decode(trackMetaList[`questionOne${node}`]);
                }

                return (
                  <div className={`question question${node}`} key={node}>
                    <Text tagName="h5">
                      {reviewMetaList[`questionType${node}`] === "rating" ? (
                        <Text>Rate the following from 1 to 10</Text>
                      ) : (
                        <></>
                      )}
                    </Text>
                    <Text tagName="h6">
                      {reviewMetaList[`questionType${node}`] === "rating" ? (
                        <>
                          <Text>
                            1:{" "}
                            {strings.decode(
                              trackMetaList[`questionContent${node}`]
                            )}
                          </Text>
                          <Text>
                            10:{" "}
                            {strings.decode(
                              trackMetaList[`questionOne${node}`]
                            )}
                          </Text>
                        </>
                      ) : (
                        <></>
                      )}
                      {reviewMetaList[`questionType${node}`] ===
                      "mult_choice" ? (
                        <>
                          <Text>
                            Question:{" "}
                            {strings.decode(
                              trackMetaList[`questionContent${node}`]
                            )}
                          </Text>
                        </>
                      ) : (
                        <></>
                      )}
                      {reviewMetaList[`questionType${node}`] ===
                      "written_response" ? (
                        <>
                          <Text>
                            Question:{" "}
                            {strings.decode(
                              trackMetaList[`questionContent${node}`]
                            )}
                          </Text>
                          <Text>
                            {strings.decode(
                              trackMetaList[`questionOne${node}`]
                            )}
                          </Text>
                        </>
                      ) : (
                        <></>
                      )}
                    </Text>

                    {answer !== "" ? (
                      <Text tagName="p">Answer: {answer}</Text>
                    ) : (
                      <></>
                    )}
                  </div>
                );
              })}
            </section>
          </Dialog>
        ) : (
          <></>
        )}
      </>
    );
  } else {
    return <>Unloadable</>;
  }
};

export default ReviewCardData;
