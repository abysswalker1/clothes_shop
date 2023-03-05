import React from 'react';

const CartItem = (props) => {
    return (
        <div className='cart-item'>
            <div className="cart-item__product"></div>
            <div className="cart-item__count"></div>
            <button className="cart-item__delete"></button>
        </div>
    );
};

export default CartItem;