import { User } from "../../../../../__generated__/gql-gen/grapql-types";

export interface JoinButtonProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  podId: string;
  podMembers: User[];
}
