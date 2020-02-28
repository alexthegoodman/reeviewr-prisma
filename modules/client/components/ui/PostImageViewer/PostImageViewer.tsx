import * as React from "react";

import { PostImageViewerProps } from "./PostImageViewer.d";
import GraphQLData from "../../data/GraphQLData/GraphQLData";
import { POST_QUERY } from "../../../graphql/queries/post";
import PostCard from "../PostCard/PostCard";
import NoResults from "../../ui/NoResults/NoResults";
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";

const PostImageViewer: React.FC<PostImageViewerProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  ctrls = <></>,
}) => {
  const [data, setData] = React.useState(null);

  const route = useCurrentRoute();
  // const loadingRoute = useLoadingRoute();
  // const navigation = useNavigation();

  const { postId } = route.lastChunk.request.params;

  console.info("PostImageViewer data", route, postId, data);

  return (
    <GraphQLData
      QUERY={POST_QUERY}
      loadingText="Loading post detail..."
      onFinish={data => setData(data)}
      variables={{ postId }}
    >
      {data !== null && data.findOnePost !== null ? (
        <section className="postImageViewer">
          <div className="postImageViewerContain">
            <div className="focusContent">
              <img src="" alt="" title="" />
            </div>
            <div className="secondaryContent">
              <div className="ctrls">{ctrls}</div>
              <div className="photoStrip">
                {/** TODO: Limit on # of photos uploaded */}
                <img src="" alt="" title="" />
                <img src="" alt="" title="" />
                <img src="" alt="" title="" />
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
