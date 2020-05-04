import * as React from "react";

import { Callout, Card, Text } from "@blueprintjs/core";
import CreateSpaceForm from "../../forms/CreateSpaceForm/CreateSpaceForm";
import { CreateSpaceProps } from "./CreateSpace.d";

const CreateSpace: React.FC<CreateSpaceProps> = () => {
  return (
    <Card className="floatingForm">
      <Text tagName="h1" className="headline">
        Create Space
      </Text>
      <Callout>
        Spaces can be anything you want. Create whatever you want!
      </Callout>

      <CreateSpaceForm />
    </Card>
  );
};

export default CreateSpace;
