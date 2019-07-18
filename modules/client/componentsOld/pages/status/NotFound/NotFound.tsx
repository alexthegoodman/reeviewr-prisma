import * as React from "react";

import { NotFoundProps } from "./NotFound.d";

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div className="container">
      <h1 className="headline">404</h1>
      <p>
        This page doesn't seem to exist, but if it should, please let us know.
      </p>
    </div>
  );
};

export default NotFound;
