import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./counterReducer";

const reducer = () => ({
  counterValue: counterReducer
});

const enhancer = composeWithDevTools();

const store = createStore(reducer, enhancer);

console.log(store.getState());

export default store;
