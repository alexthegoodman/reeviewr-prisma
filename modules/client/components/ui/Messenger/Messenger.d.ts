export interface MessengerProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  chatkitUser: any;
  selectedThread: any;
  emptyThread: boolean;
}
