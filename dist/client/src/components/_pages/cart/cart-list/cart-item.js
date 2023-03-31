"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const cartReducer_1 = require("../../../../store/cartReducer");
require("./cartList.css");
const CartItem = (_a) => {
    var _b;
    var { item } = _a, props = __rest(_a, ["item"]);
    let shortedTitle = (((_b = item.product.title) === null || _b === void 0 ? void 0 : _b.length) > 50)
        ? item.product.title.slice(0, 46) + '...'
        : item.product.title;
    return (react_1.default.createElement("div", { className: 'cart-item' },
        react_1.default.createElement(react_router_dom_1.Link, { to: `/products/${item.id}`, className: "cart-item__product" },
            react_1.default.createElement("div", { className: "cart-item__image_wrap" },
                react_1.default.createElement("img", { src: item.product.image, alt: "", className: "cart-item__image" })),
            react_1.default.createElement("p", { className: "cart-item__product-title" }, shortedTitle)),
        react_1.default.createElement("div", { className: "cart-item__quantity" },
            react_1.default.createElement("p", { className: "cart-item__price number-font" }, item.product.price + ' р.'),
            react_1.default.createElement("div", { className: "cart-item__count" },
                react_1.default.createElement("button", { className: `cart-item__count-decrement ${(item.count === 1) ? 'count-disabled' : ''}`, onClick: () => props.productQuantityDecrementAction(item.id), type: "button" }, "-"),
                react_1.default.createElement("span", { className: "cart-item__count-number" }, item.count),
                react_1.default.createElement("button", { className: "cart-item__count-increment", onClick: () => props.productQuantityIncrementAction(item.id), type: "button" }, "+")),
            react_1.default.createElement("p", { className: "cart-item__sum number-font" }, item.sum() + ' р.')),
        react_1.default.createElement("div", { className: "cart-item__delete" },
            react_1.default.createElement("button", { className: "cart-item__delete-btn", onClick: () => props.removeProductFromCartAction(item.id), type: 'button' },
                react_1.default.createElement("i", { className: "bi bi-trash3" })))));
};
exports.default = (0, react_redux_1.connect)(null, { productQuantityIncrementAction: cartReducer_1.productQuantityIncrementAction, productQuantityDecrementAction: cartReducer_1.productQuantityDecrementAction, removeProductFromCartAction: cartReducer_1.removeProductFromCartAction })(CartItem);
