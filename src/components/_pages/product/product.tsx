import React, {useEffect} from 'react';
import './product.css'
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";
import { getNeededProductThunk, addProductToFavsAction } from "../../../store/productsReducer";
import Loader from "../../common/loader/loader";
import { MainStateType, ProductType, ThunkType } from '../../../types';
import ActionType from '../../../action-types';
import { addProductToCartAction, CartProductType } from '../../../store/cartReducer';

type Props = {
    product: ProductType 
    isFetching: boolean
    cartList: CartProductType[]
    getNeededProductThunk: (itemId: number) => ThunkType
    addProductToFavsAction: (product: ProductType) => ActionType
    addProductToCartAction: (product: ProductType) => ActionType
}

const Product: React.FC<Props> = ({ product, cartList, ...props }) => {
    const { itemId } = useParams();
    const [isInCart, setIsInCart] = React.useState(false);

    useEffect(() => {
        props.getNeededProductThunk(+itemId);
    },[itemId]);

    useEffect(() => {
        if(cartList.find(item => item.id === +itemId)){
            setIsInCart(true)
        }
    },[itemId, cartList]);

    if( props.isFetching ){
        return <Loader />

    } else if ( !product ){
        return <p>Товар не найден!</p>;
    };

    return (
        <div className='product'>
            <div className="product__image-wrap">
                <img src={`${product.image}`} alt="" className="product__image"/>
            </div>

            <div className="products__info">
                <h2 className="product__title">{product.title + '.'}</h2>
                <h2 className="product__price">{product.price}</h2>

                <div className="product__buttons">
                    <button className='product__buttons-item product-add-to-favs'
                            onClick={() => {props.addProductToFavsAction(product)}} type='button'
                    >
                        <i className="bi bi-suit-heart"></i>
                    </button>
                    <div className='product__buttons-item product-create-order'>
                        { (isInCart)
                            ? <Link to={'/cart'} className='product__buttons-item-toggle'>Оформить заказ</Link> 
                            : <button className='product__buttons-item-toggle' onClick={() => {props.addProductToCartAction(product)}}>
                                <i className="bi bi-cart4"></i> Добавить в корзину
                              </button> 
                        }
                    </div>
                </div>
            </div>

            <div className="product__description">
                <h2 className='product__description-title'>Описание</h2>
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default connect(
    (state: MainStateType) => {
        return {
            product: state.products.neededProduct,
            isFetching: state.products.isFetching,
            cartList: state.cart.cartList
        }
    },
    { 
        getNeededProductThunk, 
        addProductToFavsAction, 
        addProductToCartAction
    }
)(Product);