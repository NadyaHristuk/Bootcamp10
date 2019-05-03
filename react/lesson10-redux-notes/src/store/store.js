import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootModule from "../module/rootModule";

const enhancer = composeWithDevTools();

const store = createStore(rootModule, enhancer);

export default store;
