import * as React from "react";
import { storiesOf } from "@storybook/react";
import GraphCard from "./GraphCard";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories
  .add("GraphCard - Bar 2 Columns", () => {
    const greenData = [{ x: "A", y: 10 }, { x: "B", y: 5 }, { x: "C", y: 15 }];
    const blueData = [{ x: "A", y: 12 }, { x: "B", y: 2 }, { x: "C", y: 11 }];

    return (
      <TestProvider>
        <GraphCard dataSet1={greenData} dataSet2={blueData} />
      </TestProvider>
    );
  })
  .add("GraphCard - Bar 1 Column", () => {
    const greenData = [{ x: "A", y: 10 }, { x: "B", y: 5 }, { x: "C", y: 15 }];

    return (
      <TestProvider>
        <GraphCard dataSet1={greenData} />
      </TestProvider>
    );
  })
  .add("GraphCard - Wordcloud", () => {
    const words = [
      { text: "hello", value: 3 },
      { text: "world", value: 12.5 },
      { text: "github", value: 1 },
      { text: "code", value: 1 },
    ];

    return (
      <TestProvider>
        <GraphCard dataSet1={words} graphType="wordcloud" />
      </TestProvider>
    );
  });
