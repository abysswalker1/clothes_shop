import { ThunkType } from './../types';
import {
    GET_PRODUCTS,
    GET_CATEGORIES,
    TOGGLE_IS_FETCHING,
    SET_SPECIFIC_CATEGORY, GET_NEEDED_PRODUCT, ADD_PRODUCT_TO_FAVS,
} from "../action-types";
import ActionType from "../action-types";
import {getAllProductsApi, getCategoriesApi, getNeededProductApi, setSpecificCategoryApi} from "../api/api";
import { ProductType, SpecificCategoryType } from "../types";
import { Dispatch } from "redux";

let initialState = {
    neededProduct: null as ProductType | null,
    categories: [] as Array<string>,
    productsList: [] as Array<ProductType>,
    specificCategories: [] as Array<SpecificCategoryType>,
    favs: [] as Array<ProductType>,
    isFetching: false
}

export type ProductsStateType = typeof initialState;

const productsReducer = (state: ProductsStateType = initialState, action: ActionType): ProductsStateType => {
    console.log(action.type, action.payload)
    switch(action.type) {
        case GET_PRODUCTS: {
            return {...state, productsList: action.payload}
        }

        case SET_SPECIFIC_CATEGORY: {
            for( let item of state.specificCategories ) {
                if( item[0] === action.payload[0] ) {
                    return {...state};
                }
            }
            return {...state, specificCategories: [...state.specificCategories, action.payload]}
        }

        case GET_CATEGORIES: {
            return {...state, categories: action.payload}
        }

        case GET_NEEDED_PRODUCT: {
            return {...state, neededProduct: action.payload}
        }

        case ADD_PRODUCT_TO_FAVS: {
            let modifiedFavs = [...state.favs];

            for( let product of state.favs ){
                if( product.id === action.payload.id ){
                    let productIndex: number = state.favs.indexOf(product);
                    modifiedFavs.splice(productIndex, 1);

                    return {...state, favs: modifiedFavs};
                }
            }
            return {...state, favs: state.favs.concat(action.payload)};
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.payload}
        }

        default: return state;
    }
}

export const getProductsAction = (products: Array<ProductType>): ActionType => ({
    type: GET_PRODUCTS, 
    payload: products
});
export const getCategoriesAction = (categories: Array<string>): ActionType => ({
    type: GET_CATEGORIES, 
    payload: categories
});
export const toggleIsFetchingAction = (isFetching: boolean): ActionType => ({
    type: TOGGLE_IS_FETCHING, 
    payload: isFetching
});
export const setSpecificCategoryAction = (category: SpecificCategoryType): ActionType => ({
    type: SET_SPECIFIC_CATEGORY, 
    payload: category
});
export const getNeededProductAction = (product: ProductType): ActionType => ({
    type: GET_NEEDED_PRODUCT, 
    payload: product
});
export const addProductToFavsAction = (product: ProductType): ActionType => ({
    type: ADD_PRODUCT_TO_FAVS, 
    payload: product
});

export const getCategoriesThunk = (): ThunkType => (dispatch: Dispatch<ActionType>) => {
    getCategoriesApi().then(response => {
        dispatch(getCategoriesAction(response));
    })
}

export const getProductsThunk = (): ThunkType => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleIsFetchingAction(true));

    getAllProductsApi().then(response => {
        dispatch(getProductsAction(response));
        dispatch(toggleIsFetchingAction(false));
    })
}

export const setSpecificCategoryThunk = (title: string): ThunkType => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleIsFetchingAction(true));
    setSpecificCategoryApi(title).then(response => {
        dispatch(setSpecificCategoryAction(
            [title, response]
        ));
        dispatch(toggleIsFetchingAction(false));
    })
}

export const getNeededProductThunk = (itemId: number): ThunkType => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleIsFetchingAction(true));

    getNeededProductApi(itemId).then(response => {
        dispatch(getNeededProductAction(response));
        dispatch(toggleIsFetchingAction(false));
    })
}

export default productsReducer;