import { Review } from "../../../../../__generated__/gql-gen/grapql-types";

export interface ReviewCardDataProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  review: Review;
  trackImageUrl?: string;
  trackAltText?: string;
}
