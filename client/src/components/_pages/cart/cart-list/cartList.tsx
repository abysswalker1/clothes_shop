import React from 'react';
import {connect} from "react-redux";
import { CartProductType } from '../../../../store/cartReducer';
import { MainStateType } from '../../../../types';
import CartItem from './cart-item';

type Props = {
    cartList: Array<CartProductType>
    totalCount: () => number
}

const CartList: React.FC<Props> = (props) => {
    if( props.cartList.length <= 0 ) return <p>Корзина пуста</p>

    return (
        <div className='cart-list'>
            <>{props.cartList.map( (item) => <CartItem item={item} />)}</>
        </div>
    );
};

export default connect(
    (state: MainStateType) => {
        return {
            cartList: state.cart.cartList,
            totalCount: state.cart.totalCount
        }
    }
)(CartList);