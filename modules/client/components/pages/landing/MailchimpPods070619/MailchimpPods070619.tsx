import * as React from "react";

import LandingBlockA from "../../../ui/landing/LandingBlockA/LandingBlockA";
import LandingFeaturesA from "../../../ui/landing/LandingFeaturesA/LandingFeaturesA";
import LandingHeroA from "../../../ui/landing/LandingHeroA/LandingHeroA";
import { MailchimpPods070619Props } from "./MailchimpPods070619.d";

const MailchimpPods070619: React.FC<MailchimpPods070619Props> = () => {
  return (
    <main>
      <style>
        @import
        url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap');
      </style>
      <LandingHeroA>Form</LandingHeroA>
      <LandingFeaturesA
        features={[
          { image: "", headline: "", description: "" },
          { image: "", headline: "", description: "" },
          { image: "", headline: "", description: "" },
        ]}
      />
      <LandingBlockA />
    </main>
  );
};

export default MailchimpPods070619;
