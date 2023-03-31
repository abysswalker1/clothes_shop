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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const productsList_1 = __importDefault(require("../../products-list/productsList"));
const productsReducer_1 = require("../../../store/productsReducer");
require("./homepage.css");
const react_redux_1 = require("react-redux");
const productsListSelector_1 = __importDefault(require("../../../selectors/productsListSelector"));
const HomePage = (props) => {
    (0, react_1.useEffect)(() => {
        if (props.productsList.length <= 0) {
            props.getProductsThunk();
        }
    }, [props.productsList]);
    return (react_1.default.createElement("div", { className: 'homepage container' },
        react_1.default.createElement(productsList_1.default, { productsList: props.productsList })));
};
const mapStateToProps = (state) => {
    return {
        productsList: (0, productsListSelector_1.default)(state.products.productsList)
    };
};
exports.default = (0, react_redux_1.connect)(mapStateToProps, { getProductsThunk: productsReducer_1.getProductsThunk })(HomePage);
