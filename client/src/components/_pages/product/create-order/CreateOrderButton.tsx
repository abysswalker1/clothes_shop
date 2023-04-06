import React, {useEffect} from 'react';
import './createOrderButton.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MainStateType, ProductType, SizeType } from '../../../../types';
import ActionType from '../../../../action-types';
import { addProductToCartAction, CartProductType } from '../../../../store/cartReducer';
import SizeListItem from './SizeListItem';

type Props = {
  product: ProductType
  cartList: CartProductType[]
  addProductToCartAction: (specificProduct: {product: ProductType, size: SizeType}) => ActionType
}

const CreateOrderButton: React.FC<Props> = ({product, ...props}) => {
  const [active, setActive] = React.useState(false);

  const addSpecificProductToCart = (size: SizeType) => {
    props.addProductToCartAction({product, size})
  }

  return (
    <div className='create-order'> 
      <div className='product__buttons-item product-create-order' 
           onClick={() => {setActive(!active)}}
      >
        Добавить в корзину
      </div> 
      { active && 
        <div className="size-list">
          { 
            product.parameters.map( param => {
              if( param.quantity > 0 ){
                return <SizeListItem id={product.id} size={param.size}  addSpecificProductToCart={addSpecificProductToCart}/>    
              }
            })
          }
        </div>
      }
    </div>
  );
};

export default connect(
  (state: MainStateType) => ({
    cartList: state.cart.cartList
  }),
  { addProductToCartAction }
)(CreateOrderButton);