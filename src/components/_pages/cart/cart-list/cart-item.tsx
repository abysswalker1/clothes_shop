import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ActionType from '../../../../action-types';
import { CartProductType, productQuantityIncrementAction, productQuantityDecrementAction, removeProductFromCartAction } from '../../../../store/cartReducer';
import './cartList.css';

type Props = {
    item: CartProductType
    productQuantityIncrementAction: (productId: number) => ActionType 
    productQuantityDecrementAction: (productId: number) => ActionType
    removeProductFromCartAction: (productId: number) => ActionType
}

const CartItem: React.FC<Props> = ({item, ...props}) => {
    let shortedTitle = (item.product.title?.length > 50)
        ? item.product.title.slice(0, 46) + '...'
        : item.product.title;

    return (
        <div className='cart-item'>
            <Link to={`/products/${item.id}`} className="cart-item__product">
                <div className="cart-item__image_wrap">
                    <img src={item.product.image} alt="" className="cart-item__image" />
                </div>
                <p className="cart-item__product-title">{shortedTitle}</p>
            </Link>
            <div className="cart-item__quantity">
                <p className="cart-item__price number-font">{item.product.price + ' р.'}</p>

                <div className="cart-item__count">
                    <button className={`cart-item__count-decrement ${(item.count === 1) ? 'count-disabled' : ''}`} 
                            onClick={() => props.productQuantityDecrementAction(item.id)} type="button"
                    >-</button>
                    <span className="cart-item__count-number">
                        {item.count}
                    </span>
                    <button className="cart-item__count-increment" onClick={() => props.productQuantityIncrementAction(item.id)} type="button">+</button>
                </div>

                <p className="cart-item__sum number-font">{item.sum() + ' р.'}</p>
            </div>
            <div className="cart-item__delete">
                <button className="cart-item__delete-btn" onClick={() => props.removeProductFromCartAction(item.id)} type='button'>
                    <i className="bi bi-trash3"></i>
                </button>
            </div>
        </div>
    );
};

export default connect(null, 
    { productQuantityIncrementAction, productQuantityDecrementAction, removeProductFromCartAction }
)(CartItem);