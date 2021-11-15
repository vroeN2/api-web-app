import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';

export const state = createStore(
    reducers,
    {} ,
    applyMiddleware(thunk),
)