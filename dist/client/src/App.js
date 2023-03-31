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
require("./App.css");
const react_1 = __importStar(require("react"));
require("bootstrap-icons/font/bootstrap-icons.css");
require("bootstrap/dist/css/bootstrap.min.css");
const header_1 = __importDefault(require("./components/header/header"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const homePage_1 = __importDefault(require("./components/_pages/home-page/homePage"));
const catalog_1 = __importDefault(require("./components/_pages/catalog/catalog"));
const product_1 = __importDefault(require("./components/_pages/product/product"));
const favs_1 = __importDefault(require("./components/_pages/favs/favs"));
const cart_1 = __importDefault(require("./components/_pages/cart/cart"));
const productsReducer_1 = require("./store/productsReducer");
const Footer_1 = __importDefault(require("./components/footer/Footer"));
const main_1 = __importDefault(require("./components/main/main"));
const sale_1 = __importDefault(require("./components/_pages/sale/sale"));
const Register_1 = __importDefault(require("./components/_pages/auth/register/Register"));
class App extends react_1.Component {
    componentDidMount() {
        this.props.getProductsThunk();
    }
    render() {
        return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement("div", { className: 'app' },
                react_1.default.createElement(header_1.default, null),
                react_1.default.createElement(main_1.default, null,
                    react_1.default.createElement(react_router_dom_1.Routes, null,
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(homePage_1.default, null) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/products/', element: react_1.default.createElement(catalog_1.default, null) },
                            react_1.default.createElement(react_router_dom_1.Route, { path: 'category/:title', element: react_1.default.createElement(catalog_1.default, null) })),
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/products/:itemId', element: react_1.default.createElement(product_1.default, null) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/favorites', element: react_1.default.createElement(favs_1.default, null) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/cart', element: react_1.default.createElement(cart_1.default, null) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/sale', element: react_1.default.createElement(sale_1.default, null) }),
                        react_1.default.createElement(react_router_dom_1.Route, { path: '/register', element: react_1.default.createElement(Register_1.default, null) }))),
                react_1.default.createElement(Footer_1.default, null))));
    }
}
exports.default = (0, react_redux_1.connect)(null, { getProductsThunk: productsReducer_1.getProductsThunk })(App);
