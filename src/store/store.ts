import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./productsReducer";

const reducers = combineReducers({
    products: productsReducer
})

export type ReducersType = typeof reducers;

const store = createStore(reducers, applyMiddleware(thunk));

export default store;