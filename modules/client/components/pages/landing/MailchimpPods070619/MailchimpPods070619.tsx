import * as React from "react";

import LandingBlockA from "../../../ui/landing/LandingBlockA/LandingBlockA";
import LandingFeaturesA from "../../../ui/landing/LandingFeaturesA/LandingFeaturesA";
import LandingHeroA from "../../../ui/landing/LandingHeroA/LandingHeroA";
import { MailchimpPods070619Props } from "./MailchimpPods070619.d";

const MailchimpPods070619: React.FC<MailchimpPods070619Props> = () => {
  return (
    <main>
      <LandingHeroA />
      <LandingFeaturesA />
      <LandingBlockA />
    </main>
  );
};

export default MailchimpPods070619;
