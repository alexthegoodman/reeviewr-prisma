import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions(
  {
    loginUserSuccess: null
  },
  { prefix: "auth/" }
);
