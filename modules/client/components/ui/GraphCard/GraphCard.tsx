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
            width={windowSize.innerWidth * 0.5}
            height={500}
            xDistance={100}
            color={"#E5E5E5"}
            className={"graphCardBar"}
          >
            {/* <VerticalGridLines /> */}
            {/* <HorizontalGridLines /> */}
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
        <div style={{ width: windowSize.innerWidth * 0.6, height: 400 }}>
          <div
            style={{
              position: "relative",
              left: windowSize.innerWidth * -0.15,
              top: -100,
            }}
          >
            <ReactWordcloud
              words={dataSet1}
              size={[windowSize.innerWidth * 0.9, 600]}
              options={{
                rotations: false,
                enableTooltip: false,
                colors: ["#E5E5E5", "#B7B7B7", "#969696"],
                fontSizes: [15, 25, 100],
              }}
            />
          </div>
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
