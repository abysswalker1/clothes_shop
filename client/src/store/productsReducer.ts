import { SearchQueryParams } from '../types';
import { ThunkType } from './../types';
import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  TOGGLE_IS_FETCHING,
  SET_SPECIFIC_CATEGORY,
  GET_NEEDED_PRODUCT,
  ADD_PRODUCT_TO_FAVS,
  GET_SEARCHED_RESULTS,
  SET_PRICE_RANGE,
  CHANGE_PAGE
} from '../action-types';
import ActionType from '../action-types';
import {
  getAllProductsApi,
  getCategoriesApi,
  getNeededProductApi,
  setSpecificCategoryApi,
  getSearchedProductByQueryApi,
} from '../api/api';
import { ProductType, CompilationType, CategoryType, PageLoadType } from '../types';
import { Dispatch } from 'redux';

let initialState = {
  neededProduct: null as ProductType | null,
  categories: [] as CategoryType[],
  productsList: [] as Array<ProductType>,
  specificCategories: [] as Array<CompilationType>,
  favs: [] as Array<ProductType>,
  searchResults: null as Array<ProductType> | null,
  isFetching: false,
  totalPrice: {minimumPrice: 700, maximumPrice: 6000},
  priceRange: null as number[] | null,
};

export type ProductsStateType = typeof initialState;

const productsReducer = (
  state: ProductsStateType = initialState,
  action: ActionType,
): ProductsStateType => {

  if(action.type !== TOGGLE_IS_FETCHING) console.log(action.type, action.payload);

  switch (action.type) {
    case GET_PRODUCTS: {
      let newProductsList = state.productsList.concat(action.payload)
      return { ...state, productsList: newProductsList };
    }

    case SET_SPECIFIC_CATEGORY: {
      for (let item of state.specificCategories) {
        if (item.title === action.payload.title) {
          return { ...state };
        }
      }
      return { ...state, specificCategories: [...state.specificCategories, action.payload] };
    }

    case GET_CATEGORIES: {
      return { ...state, categories: action.payload };
    }

    case GET_NEEDED_PRODUCT: {
      return { ...state, neededProduct: action.payload };
    }

    case ADD_PRODUCT_TO_FAVS: {
      let modifiedFavs = [...state.favs];

      for (let product of state.favs) {
        if (product.id === action.payload.id) {
          let productIndex: number = state.favs.indexOf(product);
          modifiedFavs.splice(productIndex, 1);

          return { ...state, favs: modifiedFavs };
        }
      }
      return { ...state, favs: state.favs.concat(action.payload) };
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.payload };
    }

    case GET_SEARCHED_RESULTS: {
      return { ...state, searchResults: action.payload };
    }

    case SET_PRICE_RANGE: {
      return {...state, priceRange: action.payload}
    }

    default:
      return state;
  }
};
export const getSearchedResultsAction = (products: Array<ProductType> | null): ActionType => ({
  type: GET_SEARCHED_RESULTS,
  payload: products,
});
export const getProductsAction = (products: Array<ProductType>): ActionType => ({
  type: GET_PRODUCTS,
  payload: products,
});
export const getCategoriesAction = (categories: CategoryType[]): ActionType => ({
  type: GET_CATEGORIES,
  payload: categories,
});
export const toggleIsFetchingAction = (isFetching: boolean): ActionType => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching,
});
export const setSpecificCategoryAction = (category: CompilationType): ActionType => ({
  type: SET_SPECIFIC_CATEGORY,
  payload: category,
});
export const getNeededProductAction = (product: ProductType): ActionType => ({
  type: GET_NEEDED_PRODUCT,
  payload: product,
});
export const addProductToFavsAction = (product: ProductType): ActionType => ({
  type: ADD_PRODUCT_TO_FAVS,
  payload: product,
});
export const setPriceRangeAction = (range: number[] | null): ActionType => ({
  type: SET_PRICE_RANGE,
  payload: range
})
export const changePageAction = (page: number): ActionType => ({
  type: CHANGE_PAGE,
  payload: page
})

export const getCategoriesThunk = (): ThunkType => (dispatch: Dispatch<ActionType>) => {
  getCategoriesApi()
    .then((response) => response.json())
    .then((response) => {
      dispatch(getCategoriesAction(response));
    })
};

export const getProductsThunk = (page: number): ThunkType => {
  const thunk = (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleIsFetchingAction(true));
    dispatch(changePageAction(page + 1))
    getAllProductsApi()
      .then((response) => {
        console.log(response)
      return response.json()
      })
      .then((response) => {
        dispatch(getProductsAction(response));
        dispatch(toggleIsFetchingAction(false));
      });
  };
  return thunk;
}
export const setSpecificCategoryThunk =
  (title: string): ThunkType =>
  (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleIsFetchingAction(true));
    setSpecificCategoryApi(title)
      .then((response) => response.json())
      .then((response) => {
        dispatch(setSpecificCategoryAction(response));
        dispatch(toggleIsFetchingAction(false));
      })
  };

export const getNeededProductThunk =
  (itemId: number): ThunkType =>
  (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleIsFetchingAction(true));

    getNeededProductApi(itemId)
      .then((response) => response.json())
      .then((response) => {
        dispatch(getNeededProductAction(response));
        dispatch(toggleIsFetchingAction(false));
  });
};

export const getSearchedProductsThunk = (params: SearchQueryParams, categoryTitle?: string) => {
  let thunk = (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleIsFetchingAction(true));

    let paramsToRequest = '?';
    let query = Object.entries(params).map(item => item[0] + '=' + item[1]).join('&');

    getSearchedProductByQueryApi(paramsToRequest + query, categoryTitle)
      .then((response) => response.json())
      .then((response) => {
        dispatch(getSearchedResultsAction(response));
        dispatch(toggleIsFetchingAction(false));
    });
  };

  return thunk;
}

export default productsReducer;
