"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reselect_1 = require("reselect");
const productCard_1 = __importDefault(require("../components/products-list/product-card/productCard"));
const getProductsListSelector = (state) => {
    return state;
};
const getProductsListHighSelector = (0, reselect_1.createSelector)(getProductsListSelector, (products) => {
    return products.map((item) => {
        return (react_1.default.createElement(productCard_1.default, { key: item.id + '', item: item }));
    });
});
exports.default = getProductsListHighSelector;
