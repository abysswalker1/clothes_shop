import React, { useEffect } from 'react';
import './createOrderButton.css';
import { MainStateType, ProductParameterType, SizeType } from '../../../../types';
import ActionType from '../../../../action-types';
import { connect } from 'react-redux';
import { CartProductType } from '../../../../store/cartReducer';
import cartList from '../../cart/cart-list/cartList';

type Props = {
  id: number
  cartList: CartProductType[]
  parameters: ProductParameterType
  addSpecificProductToCart: (parameters: ProductParameterType) => void  
}

const SizeListItem: React.FC<Props> = (props) => {
  const [isInCart, setIsInCart] = React.useState(false); 

  useEffect(() =>  {
    const checkIsProductInCart = props.cartList.find( item => 
      item.size === props.parameters.size && item.product.id === props.id
    )

    if( checkIsProductInCart ){
      setIsInCart(true);
    } else {
      setIsInCart(false)
    }

  }, [props.cartList])

  return (
    <div className={`size-list__item`} onClick={() => props.addSpecificProductToCart(props.parameters)}>
      <span className='size-list__in-cart-flag'>
        {isInCart ? <i className="bi bi-cart-check-fill"></i> : <i className="bi bi-cart-plus"></i> }
      </span>
      {props.parameters.size}
    </div>
  );
};

export default connect((state: MainStateType) => ({cartList: state.cart.cartList}))(SizeListItem);