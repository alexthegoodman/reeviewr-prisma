import { User } from "../../../../../__generated__/gql-gen/grapql-types";

export interface UserCardProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  user?: User;
}
