import React, {useEffect} from 'react';
import './product.css'
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import { getNeededProductThunk, addProductToFavsAction } from "../../../store/productsReducer";
import Loader from "../../common/loader/loader";
import { MainStateType, ProductType, ThunkType } from '../../../types';
import ActionType from '../../../action-types';
import { addProductToCartAction, CartProductType } from '../../../store/cartReducer';
import CreateOrderButton from './create-order/CreateOrderButton';
import CorrectPrice from '../../common/correctPrice/CorrectPrice';
//@ts-ignore
import image1 from '../../../assets/photo1.jpg';
//@ts-ignore
import image2 from '../../../assets/photo2.jpg';
//@ts-ignore
import image3 from '../../../assets/photo3.jpg';

type Props = {
    product: ProductType 
    isFetching: boolean
    cartList: CartProductType[]
    getNeededProductThunk: (itemId: number) => ThunkType
    addProductToFavsAction: (product: ProductType) => ActionType
}

const Product: React.FC<Props> = ({ product, cartList, ...props }) => {
    const { itemId } = useParams();
    const imgList = [image1, image2, image3];

    useEffect(() => {
        props.getNeededProductThunk(+itemId);
    },[itemId]);

    if( props.isFetching ){
        return <Loader />

    } else if ( !product ){
        return <p>Товар не найден!</p>;
    };

    return (
        <div className='product container'>

            <div className="product__imglist">
            <Swiper
                className='product-page-swiper'
                slidesPerView={1}
                spaceBetween={10}
                navigation={
                {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }
                }
                modules={ [Navigation, Pagination] }
                style={{width: '100%', height: '100%'}}
                pagination={
                    {
                        el: '.product__images',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return (
                                `
                                <span class="swiper-pagination-bullet">
                                    <img src=${imgList[index]} />
                                </span>
                                `
                            );
                        },
                    }
                }
            >
                {imgList.map(item => 
                    (  
                    <SwiperSlide>
                        <div className="product__image-wrap">
                            <img src={item}  className='product__image'/>
                        </div>
                    </SwiperSlide>
                    )
                )}
                 
                    <div className="product-page-swiper-btn swiper-button-prev">
                        <i className="bi bi-chevron-left"></i>
                    </div>
                    <div className="product-page-swiper-btn swiper-button-next">
                        <i className="bi bi-chevron-right"></i>
                    </div>
                
            </Swiper>
            </div>

            <div className="product__info">
                <h2 className="product__title">{product.title + '.'}</h2>
                <h3 className="product__price number-font"><CorrectPrice price={product.price} fullPrice={product.fullPrice}/></h3>
                <div className="product__parameter">
                    <strong className="product__parameter-title">артикул: </strong>
                    <span className='product__parameter-value'>{product.article}</span>
                </div>
                <div className="product__parameter">
                    <strong className="product__parameter-title">размеры в наличии: </strong>
                    <span className='product__parameter-value'>{product.parameters.map(param => param.size).join(', ')}</span>
                </div>
                <div className="product__images"></div>
                <div className="product__buttons">
                    <button className='product__buttons-item product-add-to-favs'
                            onClick={() => {props.addProductToFavsAction(product)}} type='button'
                    >
                        <i className="bi bi-suit-heart"></i>
                    </button>
                </div>
            </div>

            <div className="product__description">
                <h2 className='product__description-title'>Описание</h2>
                <p>{product.description}</p>
            </div>
            <div className="product_location">
                <h2>Где получить?</h2>
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