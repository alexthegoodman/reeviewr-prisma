import * as React from "react";

import { Callout, Card, Text } from "@blueprintjs/core";
import CreatePodForm from "../../forms/CreatePodForm/CreatePodForm";
import { CreatePodProps } from "./CreatePod.d";

const CreatePod: React.FC<CreatePodProps> = () => {
  return (
    <Card className="floatingForm">
      <Text tagName="h1" className="headline">
        Create Pod
      </Text>
      <Callout>
        Pods can be anything you want. Create whatever you want!
      </Callout>

      <CreatePodForm />
    </Card>
  );
};

export default CreatePod;
