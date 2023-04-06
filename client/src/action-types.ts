import {CategoryType, ProductType, SizeType, SpecificCategoryType, UserType} from "./types";

// Products Action.types
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SET_SPECIFIC_CATEGORY = 'SET_SPECIFIC_CATEGORY';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const GET_NEEDED_PRODUCT = 'GET_NEEDED_PRODUCT';
export const ADD_PRODUCT_TO_FAVS = 'ADD_PRODUCT_TO_FAVS';
export const GET_SEARCHED_RESULTS = 'GET_SEARCHED_RESULTS';
export const SET_PRICE_RANGE = 'SET_PRICE_RANGE';

// Products Actions
type getSearchedResultsActionType = {
    type: typeof GET_SEARCHED_RESULTS
    payload: Array<ProductType>
}

type getProductsActionType = {
    type: typeof GET_PRODUCTS
    payload: Array<ProductType>
}

type getCategoriesActionType = {
    type: typeof GET_CATEGORIES
    payload: CategoryType[]
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

type setPriceRangeActionType = {
    type: typeof SET_PRICE_RANGE
    payload: null | number[];
}

// Cart Action.types
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const PRODUCT_QUANTITY_INCREMENT = 'PRODUCT_QUANTITY_INCREMENT';
export const PRODUCT_QUANTITY_DECREMENT = 'PRODUCT_QUANTITY_DECREMENT';

type addProductToCartActionType = {
    type: typeof ADD_PRODUCT_TO_CART
    payload: {product: ProductType, size: SizeType}
}

type removeProductFromCart = {
    type: typeof REMOVE_PRODUCT_FROM_CART
    payload: string
}

type productQuantityIncrement = {
    type: typeof PRODUCT_QUANTITY_INCREMENT
    payload: string
}

type productQuantityDecrement = {
    type: typeof PRODUCT_QUANTITY_DECREMENT
    payload: string
}

//Auth Action.types
export const SET_USER_AUTH = 'SET_USER_AUTH';

type setUserAuthActionType = {
    type: typeof SET_USER_AUTH
    payload: UserType | null
}

type ActionType =  addProductToFavsActionType | getNeededProductActionType | toggleIsFetchingActionType
    | setSpecificCategoryActionType | getCategoriesActionType | getProductsActionType | addProductToCartActionType | 
    removeProductFromCart | productQuantityIncrement | productQuantityDecrement | getSearchedResultsActionType
    | setPriceRangeActionType | setUserAuthActionType

export default ActionType;