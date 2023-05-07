import React from 'react';
import {connect} from "react-redux";
import CartList from "./cart-list/cartList";
import CartForm from './cart-form/CartForm';
import { MainStateType } from '../../../types';
import { CartStateType } from '../../../store/cartReducer';

type Props = {
    cart: CartStateType
}

const Cart: React.FC<Props> = ({ cart }) => {
    return (
        <div className='cart'>
            <h1 className="page-title">Корзина</h1>
            <CartList />
            
        </div>
    );
};

export default connect(
    (state: MainStateType) => {
        return {
            cart: state.cart
        }
    }
)(Cart);