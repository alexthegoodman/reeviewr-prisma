export interface TrackProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  imageUrl: string;
  altText: string;
  trackTitle: string;
  artistName: string;
}
