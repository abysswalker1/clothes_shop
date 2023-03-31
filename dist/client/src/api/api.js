"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRegisterApi = exports.getSearchedProductByQueryApi = exports.getNeededProductApi = exports.setSpecificCategoryApi = exports.getCategoriesApi = exports.getAllProductsApi = void 0;
const getAllProductsApi = () => {
    return fetch('http://localhost:5000/products', {});
};
exports.getAllProductsApi = getAllProductsApi;
const getCategoriesApi = () => {
    return fetch('http://localhost:5000/products/get_categories');
};
exports.getCategoriesApi = getCategoriesApi;
const setSpecificCategoryApi = (title) => {
    return fetch(`http://localhost:5000/products/categories/${title}`);
};
exports.setSpecificCategoryApi = setSpecificCategoryApi;
const getNeededProductApi = (itemId) => {
    return fetch(`http://localhost:5000/products/${itemId}`);
};
exports.getNeededProductApi = getNeededProductApi;
const getSearchedProductByQueryApi = (searchParams, categoryType) => {
    return fetch(`http://localhost:5000/products/${categoryType}${searchParams}`);
};
exports.getSearchedProductByQueryApi = getSearchedProductByQueryApi;
const postRegisterApi = (email, password) => {
    let data = {
        email: email,
        password: password
    };
    return fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};
exports.postRegisterApi = postRegisterApi;
