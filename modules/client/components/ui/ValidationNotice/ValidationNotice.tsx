import * as React from "react";

import { ValidationNoticeProps } from "./ValidationNotice.d";

const ValidationNotice: React.FC<ValidationNoticeProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  error = "",
}) => {
  const clickHandler = e => onClick(e);
  return (
    <div className="validationNotice danger">
      <span>{error}</span>
    </div>
  );
};

export default ValidationNotice;
