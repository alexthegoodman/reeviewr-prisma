import { ReactElement, ReactNode } from "react";

export interface TrackProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  trackId: string;
  urlSegment: string;
  imageUrl: string;
  audioUrl: string;
  audioJson: JSON;
  altText: string;
  trackTitle: string;
  artistName: string;
  prependChildren: ReactNode;
  actionChildren: ReactNode;
}
