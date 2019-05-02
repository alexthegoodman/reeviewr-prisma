export interface TrackHeaderProps {
  ref?: React.Ref<any>;
  className?: string;
  onTrackClick?: (e: MouseEvent) => void;
  onArtistClick?: (e: MouseEvent) => void;
  trackTitle: string;
  artistName: string;
  duration: number;
  genre: string;
  trackId: string;
}
