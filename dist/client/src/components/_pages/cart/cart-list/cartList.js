"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const cart_item_1 = __importDefault(require("./cart-item"));
const CartList = (props) => {
    if (props.cartList.length <= 0)
        return react_1.default.createElement("p", null, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430");
    return (react_1.default.createElement("div", { className: 'cart-list' },
        react_1.default.createElement(react_1.default.Fragment, null, props.cartList.map((item) => react_1.default.createElement(cart_item_1.default, { item: item }))),
        react_1.default.createElement("p", null, props.totalCount())));
};
exports.default = (0, react_redux_1.connect)((state) => {
    return {
        cartList: state.cart.cartList,
        totalCount: state.cart.totalCount
    };
})(CartList);
