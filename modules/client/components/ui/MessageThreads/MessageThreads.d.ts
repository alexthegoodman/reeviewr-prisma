export interface MessageThreadsProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  chatkitUser: any;
  onSelectThread: (e: MouseEvent) => void;
  setEmptyThead: (a: boolean) => void;
  selectedThread: any;
  selectedUser: any;
  setSelectedUser: (a: any) => void;
  setSendDisabled: (a: boolean) => void;
  allRoomsSubscribed: boolean;
  setAllRoomsSubscribed: any;
}
