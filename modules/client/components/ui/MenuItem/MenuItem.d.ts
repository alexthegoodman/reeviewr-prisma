import { ReactElement } from "react";

export interface MenuItemProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  active?: boolean;
  labelElement?: ReactElement<any>;
}
