import React from 'react';
import {register} from 'swiper/element/bundle'

register();

const Slider = () => {
    return (
        <div className='swiper'>
            <swiper-container>
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
            </swiper-container>
        </div>
    );
};

export default Slider;