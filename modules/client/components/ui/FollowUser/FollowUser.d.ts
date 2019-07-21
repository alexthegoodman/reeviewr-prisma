export interface FollowUserProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  image: string;
  name: string;
  userId: string;
}
