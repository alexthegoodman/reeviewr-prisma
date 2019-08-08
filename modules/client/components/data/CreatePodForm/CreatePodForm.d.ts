export interface CreatePodFormProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
}

export interface CreatePodFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}
