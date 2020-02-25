import * as React from "react";

import { PostCtrlsProps } from "./PostCtrls.d";
import MenuItem from "../MenuItem/MenuItem";
import { Menu } from "@blueprintjs/core";
import Hawaii from "../../../services/Hawaii";
import { DELETE_POST } from "../../../graphql/mutations/post";
import { useNavigation } from "react-navi";

const PostCtrls: React.FC<PostCtrlsProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  post = null,
}) => {
  const hawaii = new Hawaii();
  const navigation = useNavigation();

  return (
    <Menu className="dropdown">
      <MenuItem
        onClick={() => {
          alert("Please report directly to admin@reeviewr.com Thank You!");
        }}
      >
        Report
      </MenuItem>
      <MenuItem
        onClick={() => {
          const editPostUrl = `/posts/${post.id}/${post.itemUrlSegment}/edit`;
          navigation.navigate(editPostUrl);
        }}
      >
        Edit
      </MenuItem>
      <MenuItem
        onClick={() => {
          hawaii.itemClient.deleteItem(post.id, DELETE_POST).then(data => {
            // navigation.refresh();
            window.location.reload();
          });
        }}
      >
        Delete
      </MenuItem>
    </Menu>
  );
};

export default PostCtrls;
