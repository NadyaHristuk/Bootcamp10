import { combineReducers } from "redux";
import notesReducer from "./notes/notesReduser";

export default combineReducers({
  notes: notesReducer
});
