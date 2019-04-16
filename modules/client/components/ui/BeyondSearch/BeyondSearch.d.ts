import { ReactElement } from "react";
import { IconName, MaybeElement } from "@blueprintjs/core";

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
}
