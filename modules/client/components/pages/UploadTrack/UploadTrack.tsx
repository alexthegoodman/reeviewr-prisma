import * as React from "react";

import { UploadTrackProps } from "./UploadTrack.d";
import { Text } from "@blueprintjs/core";

const UploadTrack: React.FC<UploadTrackProps> = () => {
  return (
    <section className="emptyState">
      <img src="/public/img/uploadEmpty.svg" />
      <Text tagName="h1" className="headline">
        Upload Track
      </Text>
    </section>
  );
};

export default UploadTrack;
