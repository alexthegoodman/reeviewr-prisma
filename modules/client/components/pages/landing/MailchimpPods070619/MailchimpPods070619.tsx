import * as React from "react";

import MailchimpSubscribeForm from "../../../data/MailchimpSubscribeForm/MailchimpSubscribeForm";
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
      <LandingHeroA>
        <MailchimpSubscribeForm />
      </LandingHeroA>
      <LandingFeaturesA
        features={[
          {
            image: "/public/img/mailchimp2-small.jpg",
            headline: "Review 3 posts",
            description:
              "Simply find the posts that are most relevant to you and begin reviewing them.",
          },
          {
            image: "/public/img/mailchimp3-small.jpg",
            headline: "Upload your own",
            description:
              "Once you have earned enough points, you're free to upload your own image, video, image, or text.",
          },
          {
            image: "/public/img/mailchimp4-small.jpg",
            headline: "Know where you stand",
            description:
              "Get feedback on everything from music and research papers to paintings and poems.",
          },
        ]}
      />
      <LandingBlockA />
    </main>
  );
};

export default MailchimpPods070619;
