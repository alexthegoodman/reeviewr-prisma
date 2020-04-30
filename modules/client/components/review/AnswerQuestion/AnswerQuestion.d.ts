export interface AnswerQuestionProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  questionNumber: string;
  questionType: string;
  options: any[];
}
