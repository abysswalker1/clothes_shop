import React, { useEffect } from 'react';
import './createOrderButton.css';
import { MainStateType, SizeType } from '../../../../types';
import ActionType from '../../../../action-types';
import { connect } from 'react-redux';
import { CartProductType } from '../../../../store/cartReducer';
import cartList from '../../cart/cart-list/cartList';

type Props = {
  id: number
  size: SizeType
  cartList: CartProductType[]
  addSpecificProductToCart: (size: SizeType) => void  
}

const SizeListItem: React.FC<Props> = (props) => {
  const [isInCart, setIsInCart] = React.useState(false); 

  useEffect(() =>  {
    const checkIsProductInCart = props.cartList.find( item => 
      item.size === props.size && item.product.id === props.id
    )

    if( checkIsProductInCart ){
      setIsInCart(true);
    } else {
      setIsInCart(false)
    }

  }, [props.cartList])

  return (
    <div className={`size-list__item`} onClick={() => props.addSpecificProductToCart(props.size)}>
      <span className='size-list__in-cart-flag'>
        {isInCart ? <i className="bi bi-cart-check-fill"></i> : <i className="bi bi-cart-plus"></i> }
      </span>
      {props.size}
    </div>
  );
};

export default connect((state: MainStateType) => ({cartList: state.cart.cartList}))(SizeListItem);