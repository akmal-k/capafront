import { combineReducers } from "redux";

import product from "../slice/DataSlice";
const rootReducer = combineReducers({
  product,
});

export default rootReducer;
