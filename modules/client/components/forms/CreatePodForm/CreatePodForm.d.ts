export interface CreatePodFormProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  initialValues?: any;
}

export interface CreatePodFormValues {
  name: string;
  description: string;
  banner: string;
  postType: string;
  privatePod: string;
  category: string;
}
