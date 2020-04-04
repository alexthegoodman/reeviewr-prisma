import * as React from "react";

import LikeButton from "../../ui/LikeButton/LikeButton";
import PostAnnotations from "../../ui/PostAnnotations/PostAnnotations";
import PostAudioViewer from "../../ui/PostAudioViewer/PostAudioViewer";
import PostImageViewer from "../../ui/PostImageViewer/PostImageViewer";
import PostMetaData from "../../ui/PostMetaData/PostMetaData";
import PostQuestions from "../../ui/PostQuestions/PostQuestions";
import PostReviews from "../../ui/PostReviews/PostReviews";
import PostTextViewer from "../../ui/PostTextViewer/PostTextViewer";
import PostVideoViewer from "../../ui/PostVideoViewer/PostVideoViewer";
import ShareButton from "../../ui/ShareButton/ShareButton";
import { PostDetailProps } from "./PostDetail.d";
import PostDetailCtrls from "../../ui/PostDetailCtrls/PostDetailCtrls";
import { Tab, Tabs } from "@blueprintjs/core";
import PostInfo from "../../ui/PostInfo/PostInfo";
import FlushContentWrapper from "../../ui/FlushContentWrapper/FlushContentWrapper";

const PostDetail: React.FC<PostDetailProps> = () => {
  const [selectTab, setSelectTab] = React.useState(
    "reviews" as React.ReactText
  );
  return (
    <section className="postDetail">
      <div className="postDetailContain">
        <div className="content">
          <FlushContentWrapper>
            <div className="contentContain">
              <div className="contentContainInside">
                <PostImageViewer />
                <PostAudioViewer />
                <PostVideoViewer />
                <PostTextViewer />
              </div>
            </div>
          </FlushContentWrapper>
        </div>
        <div className="interaction">
          <div className="interactionContain">
            {/* <PostMetaData /> */}
            <Tabs
              id="postTabs"
              onChange={(newTabId, prevTabId, event) => {
                setSelectTab(newTabId);
              }}
              selectedTabId={selectTab}
            >
              <Tab id="reviews" title="Reviews" panel={<PostReviews />} />
              <Tab
                id="annotations"
                title="Annotations"
                panel={<PostAnnotations />}
                panelClassName="ember-panel"
              />
              <Tab id="questions" title="Q&A" panel={<PostQuestions />} />
              <Tab id="audience" title="Audience" panel={<></>} />
              <Tab id="information" title="Information" panel={<PostInfo />} />
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetail;
