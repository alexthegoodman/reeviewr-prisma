export interface CreatePodFormProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
}

export interface CreatePodFormValues {
  name: string;
  description: string;
  banner: string;
  postType: string;
  private: string;
  category: string;
}
