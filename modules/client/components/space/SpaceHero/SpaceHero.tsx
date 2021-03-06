import * as React from "react";

import { Button, Icon, Position, Text, Tooltip } from "@blueprintjs/core";
import { SpaceHeroProps } from "./SpaceHero.d";

const SpaceHero: React.FC<SpaceHeroProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  showStats = true,
}) => {
  const clickHandler = (e) => onClick(e);
  return (
    <section className="spaceHero">
      <div className="spaceHeroContain">
        <div className="info">
          <Text tagName="h1">Your Feed</Text>
          {showStats ? (
            <div className="spaceHeroStats">
              <div className="stat">
                <Icon icon="comment" />
                <Text tagName="span">50 Reviews</Text>
              </div>
              <div className="stat">
                <Icon icon="highlight" />
                <Text tagName="span">12 Annotations</Text>
              </div>
              <div className="stat">
                <Icon icon="help" />
                <Text tagName="span">25 Questions</Text>
              </div>
            </div>
          ) : (
            <> </>
          )}
        </div>
        <div className="interact">
          <Button className="joinButtonBig">Join</Button>
          <Button className="filterButton" icon="filter-list">
            Filter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpaceHero;
