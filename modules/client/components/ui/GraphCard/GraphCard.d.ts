export interface GraphCardProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  dataSet1: any[] | string;
  dataSet2?: any[] | string;
  graphType?: string;
}
