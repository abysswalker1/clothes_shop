"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchedProductsThunk = exports.getNeededProductThunk = exports.setSpecificCategoryThunk = exports.getProductsThunk = exports.getCategoriesThunk = exports.setPriceRangeAction = exports.addProductToFavsAction = exports.getNeededProductAction = exports.setSpecificCategoryAction = exports.toggleIsFetchingAction = exports.getCategoriesAction = exports.getProductsAction = exports.getSearchedResultsAction = void 0;
const action_types_1 = require("../action-types");
const api_1 = require("../api/api");
let initialState = {
    neededProduct: null,
    categories: [],
    productsList: [],
    specificCategories: [],
    favs: [],
    searchResults: null,
    isFetching: false,
    totalPrice: { minimumPrice: 700, maximumPrice: 6000 },
    priceRange: null
};
const productsReducer = (state = initialState, action) => {
    if (action.type !== action_types_1.TOGGLE_IS_FETCHING)
        console.log(action.type, action.payload);
    switch (action.type) {
        case action_types_1.GET_PRODUCTS: {
            return Object.assign(Object.assign({}, state), { productsList: action.payload });
        }
        case action_types_1.SET_SPECIFIC_CATEGORY: {
            for (let item of state.specificCategories) {
                if (item[0] === action.payload[0]) {
                    return Object.assign({}, state);
                }
            }
            return Object.assign(Object.assign({}, state), { specificCategories: [...state.specificCategories, action.payload] });
        }
        case action_types_1.GET_CATEGORIES: {
            return Object.assign(Object.assign({}, state), { categories: action.payload });
        }
        case action_types_1.GET_NEEDED_PRODUCT: {
            return Object.assign(Object.assign({}, state), { neededProduct: action.payload });
        }
        case action_types_1.ADD_PRODUCT_TO_FAVS: {
            let modifiedFavs = [...state.favs];
            for (let product of state.favs) {
                if (product.id === action.payload.id) {
                    let productIndex = state.favs.indexOf(product);
                    modifiedFavs.splice(productIndex, 1);
                    return Object.assign(Object.assign({}, state), { favs: modifiedFavs });
                }
            }
            return Object.assign(Object.assign({}, state), { favs: state.favs.concat(action.payload) });
        }
        case action_types_1.TOGGLE_IS_FETCHING: {
            return Object.assign(Object.assign({}, state), { isFetching: action.payload });
        }
        case action_types_1.GET_SEARCHED_RESULTS: {
            return Object.assign(Object.assign({}, state), { searchResults: action.payload });
        }
        case action_types_1.SET_PRICE_RANGE: {
            return Object.assign(Object.assign({}, state), { priceRange: action.payload });
        }
        default:
            return state;
    }
};
const getSearchedResultsAction = (products) => ({
    type: action_types_1.GET_SEARCHED_RESULTS,
    payload: products,
});
exports.getSearchedResultsAction = getSearchedResultsAction;
const getProductsAction = (products) => ({
    type: action_types_1.GET_PRODUCTS,
    payload: products,
});
exports.getProductsAction = getProductsAction;
const getCategoriesAction = (categories) => ({
    type: action_types_1.GET_CATEGORIES,
    payload: categories,
});
exports.getCategoriesAction = getCategoriesAction;
const toggleIsFetchingAction = (isFetching) => ({
    type: action_types_1.TOGGLE_IS_FETCHING,
    payload: isFetching,
});
exports.toggleIsFetchingAction = toggleIsFetchingAction;
const setSpecificCategoryAction = (category) => ({
    type: action_types_1.SET_SPECIFIC_CATEGORY,
    payload: category,
});
exports.setSpecificCategoryAction = setSpecificCategoryAction;
const getNeededProductAction = (product) => ({
    type: action_types_1.GET_NEEDED_PRODUCT,
    payload: product,
});
exports.getNeededProductAction = getNeededProductAction;
const addProductToFavsAction = (product) => ({
    type: action_types_1.ADD_PRODUCT_TO_FAVS,
    payload: product,
});
exports.addProductToFavsAction = addProductToFavsAction;
const setPriceRangeAction = (range) => ({
    type: action_types_1.SET_PRICE_RANGE,
    payload: range
});
exports.setPriceRangeAction = setPriceRangeAction;
const getCategoriesThunk = () => (dispatch) => {
    (0, api_1.getCategoriesApi)()
        .then((response) => response.json())
        .then((response) => {
        dispatch((0, exports.getCategoriesAction)(response));
    });
};
exports.getCategoriesThunk = getCategoriesThunk;
const getProductsThunk = () => (dispatch) => {
    dispatch((0, exports.toggleIsFetchingAction)(true));
    (0, api_1.getAllProductsApi)()
        .then((response) => response.json())
        .then((response) => {
        dispatch((0, exports.getProductsAction)(response));
        dispatch((0, exports.toggleIsFetchingAction)(false));
    });
};
exports.getProductsThunk = getProductsThunk;
const setSpecificCategoryThunk = (title) => (dispatch) => {
    dispatch((0, exports.toggleIsFetchingAction)(true));
    (0, api_1.setSpecificCategoryApi)(title)
        .then((response) => response.json())
        .then((response) => {
        dispatch((0, exports.setSpecificCategoryAction)([title, response]));
        dispatch((0, exports.toggleIsFetchingAction)(false));
    });
};
exports.setSpecificCategoryThunk = setSpecificCategoryThunk;
const getNeededProductThunk = (itemId) => (dispatch) => {
    dispatch((0, exports.toggleIsFetchingAction)(true));
    (0, api_1.getNeededProductApi)(itemId)
        .then((response) => response.json())
        .then((response) => {
        dispatch((0, exports.getNeededProductAction)(response));
        dispatch((0, exports.toggleIsFetchingAction)(false));
    });
};
exports.getNeededProductThunk = getNeededProductThunk;
const getSearchedProductsThunk = (params, categoryTitle) => (dispatch) => {
    dispatch((0, exports.toggleIsFetchingAction)(true));
    let paramsToRequest = '?';
    let query = Object.entries(params).map(item => item[0] + '=' + item[1]).join('&');
    (0, api_1.getSearchedProductByQueryApi)(paramsToRequest + query, categoryTitle)
        .then((response) => response.json())
        .then((response) => {
        dispatch((0, exports.getSearchedResultsAction)(response));
        dispatch((0, exports.toggleIsFetchingAction)(false));
    });
};
exports.getSearchedProductsThunk = getSearchedProductsThunk;
exports.default = productsReducer;
