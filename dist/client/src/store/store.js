"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const cartReducer_1 = __importDefault(require("./cartReducer"));
const productsReducer_1 = __importDefault(require("./productsReducer"));
const reducers = (0, redux_1.combineReducers)({
    products: productsReducer_1.default,
    cart: cartReducer_1.default
});
const store = (0, redux_1.createStore)(reducers, (0, redux_1.applyMiddleware)(redux_thunk_1.default));
exports.default = store;
