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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./product.css");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const productsReducer_1 = require("../../../store/productsReducer");
const loader_1 = __importDefault(require("../../common/loader/loader"));
const cartReducer_1 = require("../../../store/cartReducer");
const Product = (_a) => {
    var { product, cartList } = _a, props = __rest(_a, ["product", "cartList"]);
    const { itemId } = (0, react_router_dom_1.useParams)();
    const [isInCart, setIsInCart] = react_1.default.useState(false);
    (0, react_1.useEffect)(() => {
        props.getNeededProductThunk(+itemId);
    }, [itemId]);
    (0, react_1.useEffect)(() => {
        if (cartList.find(item => item.id === +itemId)) {
            setIsInCart(true);
        }
    }, [itemId, cartList]);
    if (props.isFetching) {
        return react_1.default.createElement(loader_1.default, null);
    }
    else if (!product) {
        return react_1.default.createElement("p", null, "\u0422\u043E\u0432\u0430\u0440 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D!");
    }
    ;
    return (react_1.default.createElement("div", { className: 'product container' },
        react_1.default.createElement("div", { className: "product__image-wrap" },
            react_1.default.createElement("img", { src: `${product.image}`, alt: "", className: "product__image" })),
        react_1.default.createElement("div", { className: "product__info" },
            react_1.default.createElement("h2", { className: "product__title" }, product.title + '.'),
            react_1.default.createElement("h2", { className: "product__price" }, product.price),
            react_1.default.createElement("div", { className: "product__buttons" },
                react_1.default.createElement("button", { className: 'product__buttons-item product-add-to-favs', onClick: () => { props.addProductToFavsAction(product); }, type: 'button' },
                    react_1.default.createElement("i", { className: "bi bi-suit-heart" })),
                react_1.default.createElement("div", { className: 'product__buttons-item product-create-order' }, (isInCart)
                    ? react_1.default.createElement(react_router_dom_1.Link, { to: '/cart', className: 'product__buttons-item-toggle' }, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437")
                    : react_1.default.createElement("button", { className: 'product__buttons-item-toggle', onClick: () => { props.addProductToCartAction(product); } },
                        react_1.default.createElement("i", { className: "bi bi-cart4" }),
                        " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")))),
        react_1.default.createElement("div", { className: "product__description" },
            react_1.default.createElement("h2", { className: 'product__description-title' }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"),
            react_1.default.createElement("p", null, product.description))));
};
exports.default = (0, react_redux_1.connect)((state) => {
    return {
        product: state.products.neededProduct,
        isFetching: state.products.isFetching,
        cartList: state.cart.cartList
    };
}, {
    getNeededProductThunk: productsReducer_1.getNeededProductThunk,
    addProductToFavsAction: productsReducer_1.addProductToFavsAction,
    addProductToCartAction: cartReducer_1.addProductToCartAction
})(Product);
