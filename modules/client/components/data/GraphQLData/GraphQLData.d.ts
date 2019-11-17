export interface GraphQLDataProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  QUERY: any;
  loadingText: string;
  onFinish: any;
  variables?: any;
}
