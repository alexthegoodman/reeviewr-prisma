import { Pod } from "../../../../../__generated__/gql-gen/grapql-types";

export interface PodCardProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  pod: Pod;
}
