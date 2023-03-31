import { ADD_PRODUCT_TO_CART, PRODUCT_QUANTITY_DECREMENT, PRODUCT_QUANTITY_INCREMENT, REMOVE_PRODUCT_FROM_CART } from './../action-types';
import ActionType from '../action-types';
import { ProductType } from './../types';

export class CartProductType {
  readonly  id: number
  public    count: number = 1
  readonly  product: ProductType
  readonly  sum: () => number
  constructor( product: ProductType ) {
    this.id = product.id
    this.product = product
    this.sum = function() {
      return this.product.price * this.count;
    }
  }
};

let initialState = {
  cartList: [] as Array<CartProductType>,
  totalCount: function() {
    return this.cartList.reduce((prev: number, next: CartProductType) => {
      return prev + next.sum();
  }, 0) 
  } 
}
export type CartStateType = typeof initialState;

const cartReducer = (state: CartStateType = initialState, action: ActionType): CartStateType => {
  
  const updateCount = (item: CartProductType, condition: boolean, inputCount: number): CartProductType => {
    if( condition ) {
      return {...item, count: inputCount};
    } 
    return item;
  }

  const removeCartProduct = (array: CartProductType[], itemToDelete: number): CartProductType[] => {
    return array.filter(item => item.id !== itemToDelete);
  }

  switch(action.type) {
    case ADD_PRODUCT_TO_CART: {
      const newCartProduct = new CartProductType(action.payload);

      return {...state, cartList: state.cartList.concat(newCartProduct)}
    }

    case PRODUCT_QUANTITY_INCREMENT: {

      return { ...state, cartList: state.cartList.map(
        item => updateCount(item, (item.id === action.payload), item.count + 1)
      )};   
    }

    case PRODUCT_QUANTITY_DECREMENT: {

      return { ...state, cartList: state.cartList.map(
        item => updateCount(item, (item.id === action.payload && item.count > 1), item.count - 1)
      )};
    }

    case REMOVE_PRODUCT_FROM_CART: {

      return{...state, cartList: removeCartProduct(state.cartList, action.payload)}
    }

    default: return state;
  }
}

export const addProductToCartAction = (product: ProductType): ActionType => ({
  type: ADD_PRODUCT_TO_CART, 
  payload: product
})

export const productQuantityIncrementAction = (productId: number): ActionType => ({
  type: PRODUCT_QUANTITY_INCREMENT, 
  payload: productId
})

export const productQuantityDecrementAction = (productId: number): ActionType => ({
  type: PRODUCT_QUANTITY_DECREMENT, 
  payload: productId
})

export const removeProductFromCartAction = (productId: number): ActionType => ({
  type: REMOVE_PRODUCT_FROM_CART, 
  payload: productId
})

export default cartReducer;