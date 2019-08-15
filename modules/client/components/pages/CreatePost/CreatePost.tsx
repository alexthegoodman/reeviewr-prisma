import * as React from "react";

import { Card, Text } from "@blueprintjs/core";
import CreatePostForm from "../../data/CreatePostForm/CreatePostForm";
import { CreatePostProps } from "./CreatePost.d";

const CreatePost: React.FC<CreatePostProps> = () => {
  return (
    <Card className="floatingForm" style={{ width: 800 }}>
      <Text tagName="h1" className="headline">
        Create Post
      </Text>

      <CreatePostForm />
    </Card>
  );
};

export default CreatePost;
