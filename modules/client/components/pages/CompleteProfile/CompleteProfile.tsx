import * as React from "react";

import { CompleteProfileProps } from "./CompleteProfile.d";
import { Card, Text } from "@blueprintjs/core";
import CompleteProfileForm from "../../forms/CompleteProfileForm/CompleteProfileForm";

const CompleteProfile: React.FC<CompleteProfileProps> = () => {
  return (
    <Card className="floatingForm">
      <Text tagName="h1" className="headline">
        Complete Profile
      </Text>

      <CompleteProfileForm />
    </Card>
  );
};

export default CompleteProfile;
