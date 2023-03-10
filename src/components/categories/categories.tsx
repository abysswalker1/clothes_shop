import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {getCategoryHighSelector} from "../../selectors/categorySelector";
import {getCategoriesThunk} from "../../store/productsReducer";
import { MainStateType, ProductsListType, ThunkType } from '../../types';

type Props = {
  categories: ProductsListType
  getCategoriesThunk: () => ThunkType
}

const Categories: React.FC<Props> = (props) => {

  useEffect(() => {
    props.getCategoriesThunk();
  },[])

  return (
    <div className="categories">
        {props.categories}
    </div>
  );
};

const mapStateToProps = (state: MainStateType) => {
  return {
      categories: getCategoryHighSelector(state.products)
  }
}

export default compose(
  connect(mapStateToProps, { getCategoriesThunk })
)(Categories);