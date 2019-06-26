export interface SignUpFormProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
}

export interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}
