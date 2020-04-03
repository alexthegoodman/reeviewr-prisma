import * as React from "react";

import { GraphCardDataProps } from "./GraphCardData.d";
import GraphCard from "../../ui/GraphCard/GraphCard";
import Legacy from "../../../../services/Legacy";
import Strings from "../../../services/Strings";

const GraphCardData: React.FC<GraphCardDataProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  question = null,
}) => {
  const legacy = new Legacy();
  const strings = new Strings();

  const clickHandler = e => onClick(e);

  if (question != null) {
    const {
      type,
      content: option0,
      one: option1,
      two: option2,
      three: option3,
      four: option4,
      reviews,
    } = question;

    let graphData = null;
    let graphType = "";

    switch (type) {
      case "written_response":
        let completeResponse = "";
        reviews.items.forEach((review, x) => {
          completeResponse += strings.decode(review.answer);
        });

        graphData = strings.wordFreq(
          strings.removeCommonWords(completeResponse)
        );

        graphData.forEach((item, i) => {
          if (item.text === "") {
            graphData.splice(i, 1);
          }
        });

        graphType = "wordcloud";

        break;

      case "rating":
        // const greenData = [{ x: "A", y: 10 }, { x: "B", y: 5 }, { x: "C", y: 15 }];
        graphData = [];
        for (let i = 1; i <= 10; i++) {
          // console.info(reviews);
          const matchReview = reviews.items.filter(
            item => item.answer === `${i}`
          );
          graphData[graphData.length] = { x: i, y: matchReview.length };
        }

        // console.info("graphdata", graphData);

        graphType = "bar";

        break;

      case "mult_choice":
        graphData = [];
        let multChoiceOptions = [option1, option2, option3, option4];
        for (let key in multChoiceOptions) {
          if (typeof multChoiceOptions[key] !== "undefined") {
            // console.info(
            //   key,
            //   multChoiceOptions,
            //   `${parseInt(key) + 1}`,
            //   reviews
            // );
            const matchReview = reviews.items.filter(
              item => item.answer === `${parseInt(key) + 1}`
            );
            graphData[graphData.length] = {
              x: strings.decode(multChoiceOptions[key]),
              y: matchReview.length,
            };
          }
        }

        // console.info("graphdata", multChoiceOptions, reviews.items, graphData);

        graphType = "bar";

        break;
    }

    if (graphData != null && graphType != "") {
      return <GraphCard dataSet1={graphData} graphType={graphType} />;
    } else {
      return <>Building graph...</>;
    }
  }
};

export default GraphCardData;
