import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import rootModule from "../modules/rootModule";

const logger = createLogger();
const midlleweares = applyMiddleware(logger, thunk);
const enhancer = composeWithDevTools(midlleweares);

const store = createStore(rootModule, enhancer);

export default store;
