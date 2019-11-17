export interface PostInteractionProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  header: JSX.Element;
  ctrls: JSX.Element;
}
