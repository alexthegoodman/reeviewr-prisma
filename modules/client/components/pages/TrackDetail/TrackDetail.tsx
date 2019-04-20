import * as React from "react";

import { TrackDetailProps } from "./TrackDetail.d";
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";

const TrackDetail: React.FC<TrackDetailProps> = () => {
  let route = useCurrentRoute();
  let loadingRoute = useLoadingRoute();
  let navigation = useNavigation();

  const { trackId, name } = route.lastChunk.request.params;

  return (
    <>
      <h1>Track Detail</h1>
      {trackId}
    </>
  );
};

export default TrackDetail;
