export interface CheckboxFieldProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  helperText?: string;
  label?: any;
  fieldName: string;
  fieldInfo?: string;
}
