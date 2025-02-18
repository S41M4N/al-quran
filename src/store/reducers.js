import { combineReducers } from "redux";
import navigation from "./slice/navigation";
import settings from "./slice/settings";

const rootReducer = combineReducers({
  navigation,
  settings,
});

export default rootReducer;
