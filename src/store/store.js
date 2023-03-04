import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk"
import productsReducer from "./productsReducer";

const reducers = combineReducers({
    products: productsReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;