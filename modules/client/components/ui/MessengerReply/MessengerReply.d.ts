export interface MessengerReplyProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  send: (room, userIds, text) => void;
  sendDisabled: boolean;
  selectedUser: any;
  room: any;
  roomUsers: any;
}
