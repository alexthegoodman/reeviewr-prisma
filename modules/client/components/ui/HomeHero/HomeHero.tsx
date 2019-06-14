import * as React from "react";

import { HomeHeroProps } from "./HomeHero.d";
import { Text } from "@blueprintjs/core";

const HomeHero: React.FC<HomeHeroProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  // const clickHandler = e => onClick(e);
  return (
    <section className="homeHero">
      <div className="contain">
        <div className="info">
          <Text tagName="h3" className="headline">
            Welcome to Reeviewr
          </Text>
          <Text tagName="h4" className="headline">
            Exchange Music Reviews
          </Text>
          <Text tagName="p">
            Major platforms support major artists.{" "}
            <strong>
              Gaining listens, comments, and feedback on your music is a
              challenge.
            </strong>
          </Text>
          <ul>
            <li>You must leave reviews in order the post your own music</li>
            <li>Reeviewr is a tight-knit community</li>
            <li>All participants gain feedback in return</li>
            <li>All music recieves the attention it deserves</li>
          </ul>
        </div>
        <div className="feature">
          <img
            src="public/img/homeHero1.png"
            alt="Reeviewr artists playing musical instruments"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
