import * as React from "react";

import { Text } from "@blueprintjs/core";
import { Link } from "react-navi";
import AnnotationItem from "../AnnotationItem/AnnotationItem";
import PostInteraction from "../PostInteraction/PostInteraction";
import { PostAnnotationsProps } from "./PostAnnotations.d";

const PostAnnotations: React.FC<PostAnnotationsProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);
  return (
    <PostInteraction
      header={
        <>
          <Text tagName="h3">Annotations</Text>
          <Link href="#!">All annotations</Link>
        </>
      }
      ctrls={<></>}
    >
      <AnnotationItem />
      <AnnotationItem />
    </PostInteraction>
  );
};

export default PostAnnotations;
