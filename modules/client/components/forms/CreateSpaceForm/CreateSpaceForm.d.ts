export interface CreateSpaceFormProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  initialValues?: any;
}

export interface CreateSpaceFormValues {
  name: string;
  description: string;
  banner: string;
  postType: string;
  privateSpace: string;
  category: string;
}
