export interface SelectFieldProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  onChange?: (e: MouseEvent) => void;
  helperText?: string;
  label?: string;
  fieldName: string;
  fieldInfo?: string;
  options: string[];
}
