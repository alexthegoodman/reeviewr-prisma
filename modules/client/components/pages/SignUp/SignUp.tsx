import * as React from "react";

import { SignUpProps } from "./SignUp.d";
import { Text, Card } from "@blueprintjs/core";
import SignUpForm from "../../data/SignUpForm/SignUpForm";

const SignUp: React.FC<SignUpProps> = () => {
  return (
    <Card className="floatingForm">
      <Text tagName="h1" className="headline">
        Sign Up
      </Text>

      <SignUpForm />
    </Card>
  );
};

export default SignUp;
