export interface SignUpFormProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
}

export interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  artistName: string;
  // firstName: string;
  // lastName: string;
  aboutArtist: string;
  profilePicture: string;
  profilePictureType: string;
  profilePictureSize: number;
  profilePictureData: string;
  favoriteGenre: string;
  gender: string;
  age: string;
  explicit: boolean;
}
