import { combineReducers } from "redux";
import types from "./noteActionTypes";

function itemsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCSESS:
      return payload;

    case types.ADD_SUCCSESS:
      return [...state, payload];

    case types.DELETE_SUCCSESS:
      return state.filter(item => item.id !== payload);

    case types.TOGGLE_COMPLETED:
      return state.map(item =>
        item.id === payload ? { ...item, completed: !item.completed } : item
      );

    default:
      return state;
  }
}

function filterReducer(state = "", { type, payload }) {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer
});
