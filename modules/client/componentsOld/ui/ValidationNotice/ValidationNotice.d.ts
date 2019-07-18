import { FormikErrors } from "formik";

export interface ValidationNoticeProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  error: string | FormikErrors<any>;
}
