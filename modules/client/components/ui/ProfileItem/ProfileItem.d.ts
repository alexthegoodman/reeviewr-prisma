export interface ProfileItemProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  imageUrl: string;
  name: string;
  points: number;
}
