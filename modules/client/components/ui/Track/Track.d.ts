import { ReactElement, ReactNode } from "react";

export interface TrackProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  trackId: string;
  urlSegment: string;
  imageUrl: string;
  altText: string;
  trackTitle: string;
  artistName: string;
  prependChildren: ReactNode;
}
