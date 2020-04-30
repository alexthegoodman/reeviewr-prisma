import { Post } from "../../../../../__generated__/gql-gen/grapql-types";

export interface PostCardProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  post: Post;
}
