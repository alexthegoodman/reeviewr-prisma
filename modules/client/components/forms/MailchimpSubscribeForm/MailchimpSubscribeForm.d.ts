export interface MailchimpSubscribeFormProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
}

export interface MailchimpSubscribeFormValues {
  email: string;
  question: string;
}
