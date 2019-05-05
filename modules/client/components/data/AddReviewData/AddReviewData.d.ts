export interface AddReviewDataProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  imageUrl: string;
}

export interface AddReviewFormValues {
  questionAnswer1: string;
  questionAnswer2: string;
  questionAnswer3: string;
}
