"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryHighSelector = void 0;
const react_1 = __importDefault(require("react"));
const reselect_1 = require("reselect");
const caltegoryLink_1 = __importDefault(require("../components/categories/category-link/caltegoryLink"));
const getCategorySelector = (state) => {
    return state.categories;
};
exports.getCategoryHighSelector = (0, reselect_1.createSelector)(getCategorySelector, (categories) => {
    return categories.map((item) => {
        return (react_1.default.createElement(caltegoryLink_1.default, { key: item, category: item }));
    });
});
