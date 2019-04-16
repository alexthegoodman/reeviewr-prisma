export interface ReviewCardProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  artistTitle: string;
  answerPreview: string;
  reviewerImageUrl: string;
  reviewerAltText: string;
  trackImageUrl: string;
  trackAltText: string;
}
