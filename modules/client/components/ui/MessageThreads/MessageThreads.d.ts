export interface MessageThreadsProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  chatkitUser: any;
  onSelectThread: (e: MouseEvent) => void;
}
