import * as React from "react";

import { EditPodProps } from "./EditPod.d";
import { Card, Text, Callout } from "@blueprintjs/core";
import CreatePodForm from "../../forms/CreatePodForm/CreatePodForm";

const EditPod: React.FC<EditPodProps> = () => {
  return (
    <Card className="floatingForm">
      <Text tagName="h1" className="headline">
        Edit Pod
      </Text>
      <Callout>
        Pods can be anything you want. Create whatever you want!
      </Callout>

      <CreatePodForm initialValues={{}} />
    </Card>
  );
};

export default EditPod;
