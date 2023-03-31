"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProductFromCartAction = exports.productQuantityDecrementAction = exports.productQuantityIncrementAction = exports.addProductToCartAction = exports.CartProductType = void 0;
const action_types_1 = require("./../action-types");
class CartProductType {
    constructor(product) {
        this.count = 1;
        this.id = product.id;
        this.product = product;
        this.sum = function () {
            return this.product.price * this.count;
        };
    }
}
exports.CartProductType = CartProductType;
;
let initialState = {
    cartList: [],
    totalCount: function () {
        return this.cartList.reduce((prev, next) => {
            return prev + next.sum();
        }, 0);
    }
};
const cartReducer = (state = initialState, action) => {
    const updateCount = (item, condition, inputCount) => {
        if (condition) {
            return Object.assign(Object.assign({}, item), { count: inputCount });
        }
        return item;
    };
    const removeCartProduct = (array, itemToDelete) => {
        return array.filter(item => item.id !== itemToDelete);
    };
    switch (action.type) {
        case action_types_1.ADD_PRODUCT_TO_CART: {
            const newCartProduct = new CartProductType(action.payload);
            return Object.assign(Object.assign({}, state), { cartList: state.cartList.concat(newCartProduct) });
        }
        case action_types_1.PRODUCT_QUANTITY_INCREMENT: {
            return Object.assign(Object.assign({}, state), { cartList: state.cartList.map(item => updateCount(item, (item.id === action.payload), item.count + 1)) });
        }
        case action_types_1.PRODUCT_QUANTITY_DECREMENT: {
            return Object.assign(Object.assign({}, state), { cartList: state.cartList.map(item => updateCount(item, (item.id === action.payload && item.count > 1), item.count - 1)) });
        }
        case action_types_1.REMOVE_PRODUCT_FROM_CART: {
            return Object.assign(Object.assign({}, state), { cartList: removeCartProduct(state.cartList, action.payload) });
        }
        default: return state;
    }
};
const addProductToCartAction = (product) => ({
    type: action_types_1.ADD_PRODUCT_TO_CART,
    payload: product
});
exports.addProductToCartAction = addProductToCartAction;
const productQuantityIncrementAction = (productId) => ({
    type: action_types_1.PRODUCT_QUANTITY_INCREMENT,
    payload: productId
});
exports.productQuantityIncrementAction = productQuantityIncrementAction;
const productQuantityDecrementAction = (productId) => ({
    type: action_types_1.PRODUCT_QUANTITY_DECREMENT,
    payload: productId
});
exports.productQuantityDecrementAction = productQuantityDecrementAction;
const removeProductFromCartAction = (productId) => ({
    type: action_types_1.REMOVE_PRODUCT_FROM_CART,
    payload: productId
});
exports.removeProductFromCartAction = removeProductFromCartAction;
exports.default = cartReducer;
