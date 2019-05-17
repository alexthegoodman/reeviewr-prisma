export interface ReviewCardProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  artistTitle: string;
  // answerPreview: string;
  trackMetaList: any;
  reviewMetaList: any;
  reviewerImageUrl: string;
  reviewerAltText: string;
  trackImageUrl: string;
  trackAltText: string;
  reviewerId: string;
  trackId: string;
}
