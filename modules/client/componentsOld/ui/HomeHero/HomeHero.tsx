import * as React from "react";

import { HomeHeroProps } from "./HomeHero.d";
import { Text, Card } from "@blueprintjs/core";
import SignUpForm from "../../data/SignUpForm/SignUpForm";
import { useAppContext } from "../../../context";
import { useCookies } from "react-cookie";

const HomeHero: React.FC<HomeHeroProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "reeviewrPrivateHash",
  ]);
  const [{ tour, userData }, dispatch] = useAppContext();

  let feature = (
    <div className="feature">
      <Card className="floatingForm noMargin">
        <Text tagName="h1" className="headline darkHeadline">
          Sign Up
        </Text>

        <SignUpForm />
      </Card>
      {/* <img
    src="public/img/homeHero1.png"
    alt="Reeviewr artists playing musical instruments"
  /> */}
    </div>
  );
  if (userData !== null && userData) {
    feature = <></>;
  }
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
            <li>You must leave reviews in order to post your own music</li>
            <li>Reeviewr is a tight-knit community</li>
            <li>All participants gain feedback in return</li>
            <li>All music recieves the attention it deserves</li>
          </ul>

          <div
            className="fb-page"
            data-href="https://www.facebook.com/reeviewr/"
            data-tabs=""
            data-width=""
            data-height=""
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/reeviewr/"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/reeviewr/">Reeviewr</a>
            </blockquote>
          </div>
        </div>
        {feature}
      </div>
    </section>
  );
};

export default HomeHero;
