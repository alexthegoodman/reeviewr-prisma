export interface MessengerUserSearchProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  setSendDisabled: (a: boolean) => void;
  setSelectedUser: (a: any) => void;
}
