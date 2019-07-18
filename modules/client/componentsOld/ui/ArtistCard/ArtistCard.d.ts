export interface ArtistCardProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  imageUrl: string;
  artistTitle: string;
  reviewCount: number;
  trackCount: number;
}
