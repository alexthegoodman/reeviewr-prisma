import { IconName, MaybeElement } from "@blueprintjs/core";
import { ReactElement } from "react";

export interface BeyondSearchProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  inputRef?: (ref: HTMLInputElement) => any;
  defaultValue?: string;
  disabled?: boolean;
  leftIcon?: IconName | MaybeElement;
  rightElement?: ReactElement<any>;
  onChange?: (e) => void;
  placeholder?: string;
  value?: string;
}
