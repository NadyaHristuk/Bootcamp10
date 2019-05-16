import { actionTypes } from "./actions";

let initUserState = {
  currentUser: null,
  isLoading: true
};

const userReducer = (state = initUserState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER:
      return payload;
    case actionTypes.CLEAR_USER:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default userReducer;
