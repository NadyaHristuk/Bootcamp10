export const actionTypes = {
  SET_USER: "session/SET_USER",
  CLEAR_USER: "session/CLEAR_USER"
};

export const setUser = user => ({
  type: actionTypes.SET_USER,
  payload: {
    currentUser: user,
    isLoading: false
  }
});

export const clearUser = () => ({
  type: actionTypes.CLEAR_USER
});
