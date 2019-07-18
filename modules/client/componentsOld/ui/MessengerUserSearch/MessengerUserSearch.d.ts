export interface MessengerUserSearchProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  selectedUser: any;
  setSendDisabled: (a: boolean) => void;
  setSelectedUser: (a: any) => void;
  selectedThread: any;
  chatkitUser: any;
  roomUsers: any;
}
