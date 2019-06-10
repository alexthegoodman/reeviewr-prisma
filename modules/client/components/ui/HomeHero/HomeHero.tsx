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
          <Text tagName="p">
            Major platforms support major artists. Even on SoundCloud or
            BandCamp, artists looking to grow are left alone in the face of
            adversity.{" "}
            <strong>
              Gaining listens, comments, and feedback on your music is a
              challenge.
            </strong>
          </Text>
          <Text tagName="p">
            Reeviewr is the antithesis of major. We are a small community,
            dedicated to local artists, and because Reeviewr is only attractive
            to local artists, it will always be that way.
          </Text>
          <Text tagName="p">
            On Reeviewr, you must leave reviews in order to post your own music.
          </Text>
          <Text tagName="p">All participants gain feedback in return.</Text>
          <Text tagName="p">
            <strong>All music recieves the attention it deserves.</strong>
          </Text>
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
