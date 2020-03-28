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

const PostDetail: React.FC<PostDetailProps> = () => {
  return (
    <section className="postDetail">
      <div className="postDetailContain">
        <div className="content">
          <PostImageViewer />
          <PostAudioViewer />
          <PostVideoViewer />
          <PostTextViewer />
        </div>
        <div className="interaction">
          <PostMetaData />
          <PostReviews />
          <PostAnnotations />
          <PostQuestions />
        </div>
      </div>
    </section>
  );
};

export default PostDetail;
