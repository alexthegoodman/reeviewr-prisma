import * as React from "react";

import { PostImageViewerProps } from "./PostImageViewer.d";
import GraphQLData from "../../data/GraphQLData/GraphQLData";
import { POST_QUERY } from "../../../graphql/queries/post";
import PostCard from "../PostCard/PostCard";
import NoResults from "../../system/NoResults/NoResults";
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";
import HorizontalScroll from "react-scroll-horizontal";
import { Post } from "../../../../../__generated__/gql-gen/grapql-types";

const PostImageViewer: React.FC<PostImageViewerProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  ctrls = <></>,
}) => {
  const [data, setData] = React.useState<Post>(null);

  const route = useCurrentRoute();

  const { postId } = route.lastChunk.request.params;

  // console.info("PostImageViewer data", route, postId, data);

  // TODO: vertical content picker

  return (
    <GraphQLData
      QUERY={POST_QUERY}
      loadingText="Loading post detail..."
      onFinish={(gqlData) => setData(gqlData["post"])}
      variables={{ postId }}
    >
      {data !== null && typeof data !== "undefined" ? (
        <section className="postImageViewer">
          <div className="postImageViewerContain">
            <div className="focusContent">
              <img
                src="/public/img/birme/IMG_3372.jpg"
                alt="Birme"
                title="Birme"
              />
            </div>
            <div className="secondaryContent">
              <div className="photoStrip">
                {/* <HorizontalScroll reverseScroll={true}> */}
                <img
                  src="/public/img/birme/IMG_3384.jpg"
                  alt="Birme 1"
                  title="Birme 1"
                />
                <img
                  src="/public/img/birme/IMG_3420.jpg"
                  alt="Birme 2"
                  title="Birme 2"
                />
                <img
                  src="/public/img/birme/IMG_3540.jpg"
                  alt="Birme 3"
                  title="Birme 3"
                />
                <img
                  src="/public/img/birme/IMG_3648.jpg"
                  alt="Birme 4"
                  title="Birme 4"
                />
                <img
                  src="/public/img/birme/IMG_3648.jpg"
                  alt="Birme 4"
                  title="Birme 4"
                />
                <img
                  src="/public/img/birme/IMG_3648.jpg"
                  alt="Birme 4"
                  title="Birme 4"
                />
                {/* </HorizontalScroll> */}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <NoResults />
      )}
    </GraphQLData>
  );
};

export default PostImageViewer;
