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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./productCard.css");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const productsReducer_1 = require("../../../store/productsReducer");
const ProductCard = (_a) => {
    var _b;
    var { item } = _a, props = __rest(_a, ["item"]);
    let shortedTitle = (((_b = item.title) === null || _b === void 0 ? void 0 : _b.length) > 50)
        ? item.title.slice(0, 46) + '...'
        : item.title;
    let [isInfavs, setIsInFavs] = react_1.default.useState(false);
    (0, react_1.useEffect)(() => {
        if (props.favs.find(favItem => favItem.id === item.id)) {
            setIsInFavs(true);
        }
        else
            setIsInFavs(false);
    }, [props.favs]);
    return (react_1.default.createElement("div", { className: 'product-card_wrap' },
        react_1.default.createElement(react_router_dom_1.Link, { to: `/products/${item.id}`, className: "product-card" },
            react_1.default.createElement("div", { className: "product-card__img-wrap" },
                react_1.default.createElement("img", { src: item.image, className: "product-card__img", alt: '' })),
            react_1.default.createElement("p", { className: "product-card__title" }, shortedTitle),
            react_1.default.createElement("h2", { className: "product-card__price number-font" }, item.price + ' р')),
        react_1.default.createElement("button", { className: "product-card__add-to-favs", onClick: () => props.addProductToFavsAction(item) }, (isInfavs) ? react_1.default.createElement("i", { className: "bi bi-suit-heart-fill" }) : react_1.default.createElement("i", { className: "bi bi-suit-heart" }))));
};
exports.default = (0, react_redux_1.connect)((state) => {
    return {
        favs: state.products.favs
    };
}, { addProductToFavsAction: productsReducer_1.addProductToFavsAction })(ProductCard);
