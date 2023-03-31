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
const react_router_dom_1 = require("react-router-dom");
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const productsReducer_1 = require("../../../store/productsReducer");
const productsList_1 = __importDefault(require("../../products-list/productsList"));
const productsListSelector_1 = __importDefault(require("../../../selectors/productsListSelector"));
const sidebar_1 = __importDefault(require("../../sidebar/sidebar"));
require("./catalog.css");
const Catalog = (props) => {
    const location = (0, react_router_dom_1.useLocation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const queryParams = new URLSearchParams(location.search);
    const { title } = (0, react_router_dom_1.useParams)();
    const [productsList, setProductsList] = react_1.default.useState([]);
    (0, react_1.useEffect)(() => {
        let neededCategory = props.specificCategories.filter((item) => item[0] === title);
        if (props.searchResults) {
            setProductsList((0, productsListSelector_1.default)(props.searchResults));
        }
        else if (!title) {
            setProductsList((0, productsListSelector_1.default)(props.products));
        }
        else if (neededCategory.length > 0) {
            setProductsList((0, productsListSelector_1.default)(neededCategory[0][1]));
        }
        else {
            props.setSpecificCategoryThunk(title);
        }
    }, [
        title,
        props.specificCategories,
        props.products,
        props.searchResults,
    ]);
    (0, react_1.useEffect)(() => {
        let isTitleParam = (queryParams.get('title')) ? `title=${queryParams.get('title')}&` : '';
        if (props.priceRange) {
            navigate(`${location.pathname}?${isTitleParam}min=${props.priceRange[0]}&max=${props.priceRange[1]}`);
        }
        else {
            navigate(`${location.pathname}? ${isTitleParam}`);
        }
    }, [props.priceRange, title]);
    (0, react_1.useEffect)(() => {
        props.getSearchedResultsAction(null);
        if (queryParams.get('title') || queryParams.get('max') || queryParams.get('min')) {
            props.getSearchedProductsThunk(Object.fromEntries(queryParams), (title) ? `categories/${title}` : '');
        }
    }, [location]);
    return (react_1.default.createElement("main", { className: "main" },
        react_1.default.createElement("div", { className: "main__container container" },
            react_1.default.createElement(sidebar_1.default, null),
            react_1.default.createElement("div", { className: "catalog" },
                react_1.default.createElement("h1", { className: "catalog__title" },
                    title || queryParams.get('title') && `Результаты поиска: ${queryParams.get('title')}` || 'Каталог',
                    props.priceRange &&
                        react_1.default.createElement("span", { className: 'catalog__price-range' }, `От ${props.priceRange[1]} до ${props.priceRange[0]} р.`)),
                react_1.default.createElement(productsList_1.default, { key: productsList.length, productsList: productsList })))));
};
const mapStateToProps = (state) => {
    return {
        specificCategories: state.products.specificCategories,
        products: state.products.productsList,
        searchResults: state.products.searchResults,
        priceRange: state.products.priceRange,
    };
};
exports.default = (0, redux_1.compose)((0, react_redux_1.connect)(mapStateToProps, { setSpecificCategoryThunk: productsReducer_1.setSpecificCategoryThunk, getSearchedProductsThunk: productsReducer_1.getSearchedProductsThunk, getSearchedResultsAction: productsReducer_1.getSearchedResultsAction, setPriceRangeAction: productsReducer_1.setPriceRangeAction }))(Catalog);
