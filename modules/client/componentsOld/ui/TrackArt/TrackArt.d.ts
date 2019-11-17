export interface TrackArtProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  imageUrl: string;
  altText: string;
}
