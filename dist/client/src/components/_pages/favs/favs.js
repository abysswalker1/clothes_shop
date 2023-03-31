"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./favs.css");
const react_redux_1 = require("react-redux");
const productsListSelector_1 = __importDefault(require("../../../selectors/productsListSelector"));
const productsList_1 = __importDefault(require("../../products-list/productsList"));
const Favs = (props) => {
    return (react_1.default.createElement("div", { className: 'favs container' },
        react_1.default.createElement("h1", { className: 'favs__title' },
            react_1.default.createElement("i", { className: "bi bi-suit-heart-fill" }),
            "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"),
        react_1.default.createElement(productsList_1.default, { productsList: props.favsList })));
};
exports.default = (0, react_redux_1.connect)((state) => {
    return {
        favsList: (0, productsListSelector_1.default)(state.products.favs)
    };
})(Favs);
