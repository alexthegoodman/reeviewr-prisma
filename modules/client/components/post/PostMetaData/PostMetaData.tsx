import * as React from "react";

import { Text } from "@blueprintjs/core";
import FollowUser from "../../actions/FollowUser/FollowUser";
import { PostMetaDataProps } from "./PostMetaData.d";
import PostDetailCtrls from "../PostDetailCtrls/PostDetailCtrls";
import SeeMoreText from "../../actions/SeeMoreText/SeeMoreText";

const PostMetaData: React.FC<PostMetaDataProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
}) => {
  const clickHandler = (e) => onClick(e);
  return (
    <section className="postMetaData">
      <div className="postMetaDataContain">
        <Text className="title" tagName="h1">
          Aku inign menjadi setitik kecil dilangit
        </Text>
        <div className="author">
          <Text className="authorLabel">Author</Text>
          <FollowUser
            size="large"
            name="Billy Thomason"
            userId=""
            image="/public/img/mailchimp4-small.jpg"
          />
        </div>
        <PostDetailCtrls />
        <SeeMoreText text="Dsini adalah penjelasan dan deskropsi dari post yang diinginkan jadi kamu bisa mengisinya disni saja ya bang gausah khawatir." />
      </div>
    </section>
  );
};

export default PostMetaData;
