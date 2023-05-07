import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/swiper.css';
import { connect } from 'react-redux';
import { ProductType } from '../../types';
import ProductsSlideItem from './products-slide-item/ProductsSlideItem';

type Props = {
  list: ProductType[]
}

const ProductsSlider: React.FC<Props> = (props) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      navigation={
        {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }
      }
      modules={ [Navigation] }
    >
      {props.list.map(item => 
        (  
          <SwiperSlide>
            <ProductsSlideItem product={item} />
          </SwiperSlide>
        )
      )}
      <div className="swiper-controller">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </Swiper>
  );
};

export default ProductsSlider;