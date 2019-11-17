import {
  Review,
  UserTrack,
} from "../../../../../__generated__/gql-gen/grapql-types";

export interface ReviewCardDataProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  node: number;
  review: Review;
  track?: UserTrack;
  trackImageUrl?: string;
  trackAltText?: string;
}
