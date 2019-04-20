export interface ReviewCardDataProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  review: any;
  trackImageUrl?: string;
  trackAltText?: string;
}
