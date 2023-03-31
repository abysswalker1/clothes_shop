"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const categorySelector_1 = require("../../selectors/categorySelector");
const productsReducer_1 = require("../../store/productsReducer");
const Categories = (props) => {
    (0, react_1.useEffect)(() => {
        props.getCategoriesThunk();
    }, []);
    return (react_1.default.createElement("div", { className: "categories" }, props.categories));
};
const mapStateToProps = (state) => {
    return {
        categories: (0, categorySelector_1.getCategoryHighSelector)(state.products)
    };
};
exports.default = (0, redux_1.compose)((0, react_redux_1.connect)(mapStateToProps, { getCategoriesThunk: productsReducer_1.getCategoriesThunk }))(Categories);
