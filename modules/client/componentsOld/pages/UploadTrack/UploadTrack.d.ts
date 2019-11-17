import { Genres } from "../../../../defs/genres";

export interface UploadTrackProps {}

export interface UploadFormValues {
  trackTitle: string;
  genre: Genres;

  coverArt: string;
  coverArtType: string;
  coverArtSize: number;
  coverArtData: string;

  trackAudio: string;
  trackAudioType: string;
  trackAudioSize: number;
  trackAudioData: string;

  questionType1: string;
  questionContent1: string;
  questionOne1: string;
  questionTwo1: string;
  questionThree1: string;
  questionFour1: string;

  questionType2: string;
  questionContent2: string;
  questionOne2: string;
  questionTwo2: string;
  questionThree2: string;
  questionFour2: string;

  questionType3: string;
  questionContent3: string;
  questionOne3: string;
  questionTwo3: string;
  questionThree3: string;
  questionFour3: string;
}
