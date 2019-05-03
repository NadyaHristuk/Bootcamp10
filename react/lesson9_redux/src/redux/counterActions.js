import types from "./actionTypes";

const increment = value => ({
  type: types.INCREMENT,
  payload: value
});

const decrement = value => ({
  type: types.DECREMENT,
  payload: value
});

const reset = () => ({
  type: types.RESET
});

export { increment, decrement, reset };
