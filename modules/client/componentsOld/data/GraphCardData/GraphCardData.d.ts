import { Question } from "../../pages/TrackDetail/TrackDetail.d";

export interface GraphCardDataProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  question: Question;
}
