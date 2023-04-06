import { ADD_PRODUCT_TO_CART, PRODUCT_QUANTITY_DECREMENT, PRODUCT_QUANTITY_INCREMENT, REMOVE_PRODUCT_FROM_CART } from './../action-types';
import ActionType from '../action-types';
import { ProductType, SizeType } from './../types';

export class CartProductType {
  readonly  id: string
  readonly  size: SizeType
  public    count: number = 1
  readonly  product: ProductType
  readonly  sum: () => number
  constructor( specificProduct: {product: ProductType, size: SizeType} ) {
    this.id = specificProduct.product.id + specificProduct.size
    this.size = specificProduct.size
    this.product = specificProduct.product
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

  const removeCartProduct = (array: CartProductType[], itemToDelete: string): CartProductType[] => {
    return array.filter(item => item.id !== itemToDelete);
  }

  switch(action.type) {
    case ADD_PRODUCT_TO_CART: {
      const newCartProduct = new CartProductType(action.payload);
      const duplicate = state.cartList.find(item=> item.id === newCartProduct.id);

      if( duplicate ){
        return {...state, cartList: removeCartProduct(state.cartList, newCartProduct.id)}
      }

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

export const addProductToCartAction = (specificProduct: {product: ProductType, size: SizeType}): ActionType => ({
  type: ADD_PRODUCT_TO_CART, 
  payload: specificProduct
})

export const productQuantityIncrementAction = (productId: string): ActionType => ({
  type: PRODUCT_QUANTITY_INCREMENT, 
  payload: productId
})

export const productQuantityDecrementAction = (productId: string): ActionType => ({
  type: PRODUCT_QUANTITY_DECREMENT, 
  payload: productId
})

export const removeProductFromCartAction = (productId: string): ActionType => ({
  type: REMOVE_PRODUCT_FROM_CART, 
  payload: productId
})

export default cartReducer;