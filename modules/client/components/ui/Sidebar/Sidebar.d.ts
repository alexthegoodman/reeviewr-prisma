export interface SidebarProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  mobile?: boolean;
  onClosed?: () => void;
  onOpened?: () => void;
}
