import { UserTrack } from "../../../../../__generated__/gql-gen/grapql-types";

export interface AddReviewDataProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  track: UserTrack;
}

export interface AddReviewFormValues {
  questionAnswer1: string;
  questionAnswer2: string;
  questionAnswer3: string;
}
