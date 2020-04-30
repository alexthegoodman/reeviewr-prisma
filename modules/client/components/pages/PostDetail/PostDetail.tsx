import * as React from "react";

import LikeButton from "../../actions/LikeButton/LikeButton";
import PostAnnotations from "../../post/PostAnnotations/PostAnnotations";
import PostAudioViewer from "../../post/PostAudioViewer/PostAudioViewer";
import PostImageViewer from "../../post/PostImageViewer/PostImageViewer";
import PostMetaData from "../../post/PostMetaData/PostMetaData";
import PostQuestions from "../../post/PostQuestions/PostQuestions";
import PostReviews from "../../post/PostReviews/PostReviews";
import PostTextViewer from "../../post/PostTextViewer/PostTextViewer";
import PostVideoViewer from "../../post/PostVideoViewer/PostVideoViewer";
import ShareButton from "../../actions/ShareButton/ShareButton";
import { PostDetailProps } from "./PostDetail.d";
import PostDetailCtrls from "../../post/PostDetailCtrls/PostDetailCtrls";
import { Tab, Tabs } from "@blueprintjs/core";
import PostInfo from "../../post/PostInfo/PostInfo";
import FlushContentWrapper from "../../layout/FlushContentWrapper/FlushContentWrapper";

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
