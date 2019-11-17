import { User } from "../../../../../__generated__/gql-gen/grapql-types";

export interface ProfileSidebarProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  userData: {
    user: User;
  };
}
