export interface CreatePostFormProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
}

export interface CreatePostFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}
