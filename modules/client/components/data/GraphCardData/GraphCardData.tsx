import * as React from "react";

import { GraphCardDataProps } from "./GraphCardData.d";
import GraphCard from "../../ui/GraphCard/GraphCard";

const GraphCardData: React.FC<GraphCardDataProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const clickHandler = e => onClick(e);

  const wordFreq = str => {
    const words = str.replace(/[.]/g, "").split(/\s/);
    const freqMap = {};
    words.forEach(w => {
      if (!freqMap[w]) {
        freqMap[w] = 0;
      }
      freqMap[w] += 1;
    });

    const graphMap = [];
    Object.keys(freqMap).forEach((key, i) => {
      graphMap[i] = { text: key, value: freqMap[key] };
    });

    return graphMap;
  };

  const graphMap = wordFreq("I am the big the big bull.");

  console.info(graphMap);

  const graphType = "wordcloud";

  return <GraphCard dataSet1={graphMap} graphType="wordcloud" />;
};

export default GraphCardData;
