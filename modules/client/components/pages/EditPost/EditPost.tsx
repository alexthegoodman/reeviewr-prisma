import * as React from "react";

import { EditPostProps } from "./EditPost.d";
import { Card, Text } from "@blueprintjs/core";
import CreatePostForm from "../../data/CreatePostForm/CreatePostForm";

const EditPost: React.FC<EditPostProps> = () => {
  return (
    <Card className="floatingForm" style={{ width: 800 }}>
      <Text tagName="h1" className="headline">
        Edit Post
      </Text>

      <CreatePostForm initialValues={{}} />
    </Card>
  );
};

export default EditPost;
