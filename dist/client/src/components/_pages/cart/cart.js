"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const cartList_1 = __importDefault(require("./cart-list/cartList"));
const Cart = () => {
    return (react_1.default.createElement("div", { className: 'cart container' },
        react_1.default.createElement("h1", { className: "cart__title" }, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430"),
        react_1.default.createElement(cartList_1.default, null)));
};
exports.default = (0, react_redux_1.connect)()(Cart);
