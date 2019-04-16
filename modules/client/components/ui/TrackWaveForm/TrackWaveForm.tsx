import * as React from "react";

import { TrackWaveFormProps } from "./TrackWaveForm.d";

const TrackWaveForm: React.FC<TrackWaveFormProps> = ({
  ref = null,
  className = "",
}) => {
  return (
    <section ref={ref} className={`trackWaveForm ${className}`}>
      <div className="waveContainer" />
    </section>
  );
};

export default TrackWaveForm;
