import { ReactElement } from "react";

export interface HeaderProps {
  ref?: React.Ref<any>;
  className?: string;
  leftElements?: ReactElement<any>;
  rightElements?: ReactElement<any>;
}
