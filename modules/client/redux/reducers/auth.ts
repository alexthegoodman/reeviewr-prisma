import { Types } from "../actions/auth";

const initialState = {
  authenticated: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action["type"]) {
    case Types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        authenticated: true
      };

    default:
      return state;
  }
}
