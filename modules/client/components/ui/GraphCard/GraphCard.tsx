import * as React from "react";

import { GraphCardProps } from "./GraphCard.d";

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  VerticalGridLines,
  VerticalBarSeries,
  LabelSeries,
} from "react-vis";

import useWindowSize from "@rehooks/window-size";
import ReactWordcloud from "react-wordcloud";
import { Card } from "@blueprintjs/core";

const GraphCard: React.FC<GraphCardProps> = ({
  ref = null,
  className = "",
  onClick = () => console.info("Click"),
  dataSet1 = null,
  dataSet2 = null,
  graphType = "bar",
}) => {
  const windowSize = useWindowSize();

  let graph;
  switch (graphType) {
    case "bar":
      if (typeof dataSet1 !== "string") {
        let labelData;
        let renderSet2;
        let renderLabels;
        if (dataSet2 !== null) {
          labelData = dataSet1.map((d, idx) => ({
            x: d.x,
            y: Math.max(dataSet1[idx].y, dataSet2[idx].y),
          }));
          renderSet2 = <VerticalBarSeries data={dataSet2} />;
          renderLabels = <LabelSeries data={labelData} getLabel={d => d.x} />;
        }

        graph = (
          <XYPlot
            xType="ordinal"
            width={windowSize.innerWidth * 0.8}
            height={500}
            xDistance={100}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <VerticalBarSeries data={dataSet1} />
            {renderSet2}
            {renderLabels}
          </XYPlot>
        );
      }
      break;
    case "wordcloud":
      graph = (
        <div style={{ width: windowSize.innerWidth * 0.8, height: 400 }}>
          <ReactWordcloud
            words={dataSet1}
            options={{
              rotations: false,
              enableTooltip: false,
              colors: ["white"],
              fontSizes: [20, 40, 60],
            }}
          />
        </div>
      );
      break;
    case "wordlist":
      // TODO: a list of words rather than cloud format
      break;
  }

  return (
    <Card ref={ref} className={`graphCard ${className}`}>
      {graph}
    </Card>
  );
};

export default GraphCard;
