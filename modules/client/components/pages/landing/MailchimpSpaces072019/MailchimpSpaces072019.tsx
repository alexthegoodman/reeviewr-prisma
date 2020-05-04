import * as React from "react";

import SignUpForm from "../../../forms/SignUpForm/SignUpForm";
import LandingBlockA from "../../../landing/LandingBlockA/LandingBlockA";
import LandingFeaturesA from "../../../landing/LandingFeaturesA/LandingFeaturesA";
import LandingHeroA from "../../../landing/LandingHeroA/LandingHeroA";
import { MailchimpSpaces072019Props } from "./MailchimpSpaces072019.d";

const MailchimpSpaces072019: React.FC<MailchimpSpaces072019Props> = () => {
  return (
    <main>
      <LandingHeroA>
        <SignUpForm />
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

export default MailchimpSpaces072019;
