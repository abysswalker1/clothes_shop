import {ProductType, SpecificCategoryType} from "./types";

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SET_SPECIFIC_CATEGORY = 'SET_SPECIFIC_CATEGORY';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const GET_NEEDED_PRODUCT = 'GET_NEEDED_PRODUCT';
export const ADD_PRODUCT_TO_FAVS = 'ADD_PRODUCT_TO_FAVS';

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

type ActionType =  addProductToFavsActionType | getNeededProductActionType | toggleIsFetchingActionType
    | setSpecificCategoryActionType | getCategoriesActionType | getProductsActionType

export default ActionType;