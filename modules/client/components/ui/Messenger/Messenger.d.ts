export interface MessengerProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  chatkitUser: any;
  selectedThread: any;
  emptyThread: boolean;
  selectedUser: any;
  sendDisabled: boolean;
  setSendDisabled: any;
  setSelectedUser: any;
  messages: any;
  setMessages: any;
  allRoomsSubscribed: boolean;
  setAllRoomsSubscribed: any;
  updateMessages: any;
}
