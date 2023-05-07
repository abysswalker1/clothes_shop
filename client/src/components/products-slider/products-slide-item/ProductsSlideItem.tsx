import React from 'react';
import '../productsSlider.css';
import { ProductType } from '../../../types';
import CorrectPrice from '../../common/correctPrice/CorrectPrice';
import { Link } from 'react-router-dom';

type Props = {
  product: ProductType
}

const ProductsSlideItem: React.FC<Props> = ({product}) => {
  return (
    <Link to={`/products/${product.id}`} className='products-slide-item'>
      <div className="products-slide-item__img-wrap">
        <img src={product.image} className='products-slide-item__img' />
      </div>
      <div className="products-slide-item__info">
        <p>{product.title}</p>
        <CorrectPrice price={product.price} fullPrice={product.fullPrice}/>
      </div>
    </Link>
  );
};

export default ProductsSlideItem;