import React from 'react';
import {connect} from "react-redux";
import CartList from "./cart-list/cartList";

const Cart = (props) => {
    return (
        <div className='cart'>
            <h1 className="cart__title">Корзина</h1>
            <CartList />
        </div>
    );
};

export default connect()(Cart);