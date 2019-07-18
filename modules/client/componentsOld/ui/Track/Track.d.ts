import { ReactElement, ReactNode } from "react";
import { UserTrack } from "../../../../../__generated__/gql-gen/grapql-types";

export interface TrackProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  track: UserTrack;
  trackId: string;
  trackOldId: string;
  urlSegment: string;
  imageUrl: string;
  audioUrl: string;
  audioJson: JSON;
  altText: string;
  trackTitle: string;
  artistName: string;
  prependChildren: ReactNode;
  actionChildren: ReactNode;
  headerChildren?: ReactNode;
}
