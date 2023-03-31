"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./productsList.css");
const react_redux_1 = require("react-redux");
const loader_1 = __importDefault(require("../common/loader/loader"));
const ProductsList = (props) => {
    if (!props.productsList.length) {
        return react_1.default.createElement("p", null, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E");
    }
    return (react_1.default.createElement("div", { className: 'products-list' },
        react_1.default.createElement(react_1.default.Fragment, null, props.productsList),
        props.isFetching && react_1.default.createElement(loader_1.default, null)));
};
exports.default = (0, react_redux_1.connect)((state) => ({
    isFetching: state.products.isFetching
}))(ProductsList);
