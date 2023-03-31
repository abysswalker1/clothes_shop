"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./nav.css");
const Nav = (props) => {
    return (react_1.default.createElement("nav", { className: 'nav' },
        react_1.default.createElement("button", { onClick: () => props.openCategories(), className: `nav__categories-btn ${(props.categoriesOpened ? 'opened' : '')}` },
            "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 ",
            react_1.default.createElement("i", { className: "bi bi-caret-down-fill" })),
        react_1.default.createElement(react_router_dom_1.Link, { to: '/products', className: "nav__categories-link" }, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"),
        react_1.default.createElement(react_router_dom_1.Link, { to: '/sale' }, "\u0410\u043A\u0446\u0438\u0438"),
        react_1.default.createElement(react_router_dom_1.Link, { to: '/' }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
        react_1.default.createElement(react_router_dom_1.Link, { to: '/' }, "\u041E \u043D\u0430\u0441")));
};
exports.default = Nav;
