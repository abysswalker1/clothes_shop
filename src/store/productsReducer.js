import {
    GET_PRODUCTS,
    GET_CATEGORIES,
    TOGGLE_IS_FETCHING,
    SET_SPECIFIC_CATEGORY,
} from "./action-types";
import {getAllProductsApi, getCategoriesApi, setSpecificCategoryApi} from "../api/api";

let initialState = {
    categories: [

    ],
    productsList: [

    ],
    specificCategories: [

    ],
    isFetching: false
}

const productsReducer = (state = initialState, action) => {
    console.log(action.type)
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

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.payload}
        }

        default: return state;
    }
}

export const getProductsAction = (products) => ({type: GET_PRODUCTS, payload: products});
export const getCategoriesAction = (categories) => ({type: GET_CATEGORIES, payload: categories});
export const toggleIsFetchingAction = (isFetching) => ({type: TOGGLE_IS_FETCHING, payload: isFetching});
export const setSpecificCategoryAction = (category) => ({type: SET_SPECIFIC_CATEGORY, payload: category})

export const getCategoriesThunk = () => (dispatch) => {
    getCategoriesApi().then(response => {
        dispatch(getCategoriesAction(response));
    })
}

export const getProductsThunk = () => (dispatch) => {
    dispatch(toggleIsFetchingAction(true));

    getAllProductsApi().then(response => {
        dispatch(getProductsAction(response));
        dispatch(toggleIsFetchingAction(false));
    })
}

export const setSpecificCategoryThunk = (title) => (dispatch) => {
    dispatch(toggleIsFetchingAction(true));
    setSpecificCategoryApi(title).then(response => {
        console.log(response)
        dispatch(setSpecificCategoryAction(
            [title, response]
        ));
        dispatch(toggleIsFetchingAction(false));
    })
}

export default productsReducer;