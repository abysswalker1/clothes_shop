"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpecificCategoryHighSelector = void 0;
const react_1 = __importDefault(require("react"));
const reselect_1 = require("reselect");
const productCard_1 = __importDefault(require("../components/products-list/product-card/productCard"));
const getSpecificCategorySelector = (state) => {
    return state[1];
};
exports.getSpecificCategoryHighSelector = (0, reselect_1.createSelector)(getSpecificCategorySelector, (products) => {
    return products.map((item) => {
        return (react_1.default.createElement(productCard_1.default, { key: item + '', item: item }));
    });
});
