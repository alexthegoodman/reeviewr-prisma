import * as React from "react";

import { EditSpaceProps } from "./EditSpace";
import { Card, Text, Callout } from "@blueprintjs/core";
import CreateSpaceForm from "../../forms/CreateSpaceForm/CreateSpaceForm";

const EditSpace: React.FC<EditSpaceProps> = () => {
  return (
    <Card className="floatingForm">
      <Text tagName="h1" className="headline">
        Edit Space
      </Text>
      <Callout>
        Spaces can be anything you want. Create whatever you want!
      </Callout>

      <CreateSpaceForm initialValues={{}} />
    </Card>
  );
};

export default EditSpace;
