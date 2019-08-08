import * as React from "react";

import { Card, Text } from "@blueprintjs/core";
import CreatePodForm from "../../data/CreatePodForm/CreatePodForm";
import { CreatePodProps } from "./CreatePod.d";

const CreatePod: React.FC<CreatePodProps> = () => {
  return (
    <Card className="floatingForm">
      <Text tagName="h1" className="headline">
        Create Pod
      </Text>

      <CreatePodForm />
    </Card>
  );
};

export default CreatePod;
