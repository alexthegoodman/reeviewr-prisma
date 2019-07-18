export interface TrackDetailProps {
  trackId: string;
}

export interface Question {
  content: string;
  type: string;
  one: string;
  two: string;
  three: string;
  four: string;
  reviews: {
    type: string;
    items: any[];
  };
}
