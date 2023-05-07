import React from 'react';
import ProductsSlider from '../products-slider/ProductsSlider';
import { CategoryType, CompilationType, MainStateType } from '../../types';
import { connect } from 'react-redux';
import './compilation.css'

type Props = {
  item: CompilationType
  categories: CategoryType[]
}

const Compilation: React.FC<Props> = ({ item, ...props }) => {
  const [category, setCategory] = React.useState(
    props.categories.find( category => category.category_id === +item.title )
  );

  return (
    <div className='compilation'>
      <h3>{category.category_title}</h3>
      <ProductsSlider list={item.items} />
    </div>
  );
};

export default connect(
  (state: MainStateType) => ({
    categories: state.products.categories
  })
)(Compilation);