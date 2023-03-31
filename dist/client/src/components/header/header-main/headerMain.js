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
const react_router_dom_1 = require("react-router-dom");
require("./headerMain.css");
const react_redux_1 = require("react-redux");
const nav_1 = __importDefault(require("../nav/nav"));
const search_1 = __importDefault(require("../search/search"));
const HeaderMain = (_a) => {
    var { cart, favs } = _a, props = __rest(_a, ["cart", "favs"]);
    const mobileMenuExpand = () => {
        props.openMenu();
    };
    return (react_1.default.createElement("div", { className: 'header-main' },
        react_1.default.createElement("div", { className: "header-main__container container" },
            react_1.default.createElement("div", { className: "header-main__logo" },
                react_1.default.createElement("button", { className: "header-main__mobile-menu-btn", onClick: () => mobileMenuExpand(), type: 'button' },
                    react_1.default.createElement("i", { className: "bi bi-list" })),
                react_1.default.createElement(react_router_dom_1.Link, { to: '/' }, "LOGO")),
            react_1.default.createElement("div", { className: "header-main__nav" },
                react_1.default.createElement(nav_1.default, null)),
            react_1.default.createElement("div", { className: "header-main__links" },
                react_1.default.createElement(search_1.default, null),
                react_1.default.createElement(react_router_dom_1.Link, { to: '/favorites' },
                    react_1.default.createElement("div", { className: "header-main__links-item" },
                        react_1.default.createElement("i", { className: "bi bi-suit-heart" }),
                        favs.length > 0 && react_1.default.createElement("div", { className: "header-main__links-messages" }, favs.length))),
                react_1.default.createElement(react_router_dom_1.Link, { to: '/cart' },
                    react_1.default.createElement("div", { className: "header-main__links-item" },
                        react_1.default.createElement("i", { className: "bi bi-cart3" }),
                        cart.length > 0 && react_1.default.createElement("div", { className: "header-main__links-messages" }, cart.length))),
                react_1.default.createElement(react_router_dom_1.Link, { to: '/register' },
                    react_1.default.createElement("div", { className: "header-main__links-item" },
                        react_1.default.createElement("i", { className: "bi bi-person" })))))));
};
exports.default = (0, react_redux_1.connect)((state) => {
    return {
        favs: state.products.favs,
        cart: state.cart.cartList
    };
})(HeaderMain);
