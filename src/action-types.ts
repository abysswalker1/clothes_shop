import {ProductType, SpecificCategoryType} from "./types";

// Products Action.types
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SET_SPECIFIC_CATEGORY = 'SET_SPECIFIC_CATEGORY';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const GET_NEEDED_PRODUCT = 'GET_NEEDED_PRODUCT';
export const ADD_PRODUCT_TO_FAVS = 'ADD_PRODUCT_TO_FAVS';

// Products Actions
type getProductsActionType = {
    type: typeof GET_PRODUCTS
    payload: Array<ProductType>
}

type getCategoriesActionType = {
    type: typeof GET_CATEGORIES
    payload: Array<string>
}

type setSpecificCategoryActionType = {
    type: typeof SET_SPECIFIC_CATEGORY
    payload: SpecificCategoryType
}

type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    payload: boolean
}

type getNeededProductActionType = {
    type: typeof GET_NEEDED_PRODUCT
    payload: ProductType
}

type addProductToFavsActionType = {
    type: typeof ADD_PRODUCT_TO_FAVS
    payload: ProductType
}

// Cart Action.types
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const PRODUCT_QUANTITY_INCREMENT = 'PRODUCT_QUANTITY_INCREMENT';
export const PRODUCT_QUANTITY_DECREMENT = 'PRODUCT_QUANTITY_DECREMENT';

type addProductToCartActionType = {
    type: typeof ADD_PRODUCT_TO_CART
    payload: ProductType
}

type removeProductFromCart = {
    type: typeof REMOVE_PRODUCT_FROM_CART
    payload: number
}

type productQuantityIncrement = {
    type: typeof PRODUCT_QUANTITY_INCREMENT
    payload: number
}

type productQuantityDecrement = {
    type: typeof PRODUCT_QUANTITY_DECREMENT
    payload: number
}


type ActionType =  addProductToFavsActionType | getNeededProductActionType | toggleIsFetchingActionType
    | setSpecificCategoryActionType | getCategoriesActionType | getProductsActionType | addProductToCartActionType | 
    removeProductFromCart | productQuantityIncrement | productQuantityDecrement

export default ActionType;