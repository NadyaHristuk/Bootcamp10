import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers } from "redux";
import userReducer from "./reducer";
import messageReducer from "./messageRedusers";
import channelsReducer from "./ChannelsReducer";

const rootReduser = combineReducers({
  user: userReducer,
  channels: channelsReducer,
  message: messageReducer
});
const store = createStore(rootReduser, composeWithDevTools());

export default store;
