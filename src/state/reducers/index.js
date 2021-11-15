import { combineReducers } from "redux";
import savedReducer from "./savedReducer";

const reducers = combineReducers({
    saved: savedReducer,
});

export default reducers;