import React from 'react';
import './favs.css'
import {connect} from "react-redux";
import getProductsListHighSelector from "../../../selectors/productsListSelector";
import ProductsList from "../../products-list/productsList";
import { MainStateType, ProductsListType, ProductType } from '../../../types';

type Props = {
    favsList: ProductsListType
}

const Favs : React.FC<Props> = (props) => {
    return (
        <div className='favs'>
            <h1 className='favs__title'><i className="bi bi-suit-heart-fill"></i>Избранное</h1>
            <ProductsList productsList={props.favsList}/>
        </div>
    );
};

export default connect(
    (state: MainStateType) => {
        return {
            favsList: getProductsListHighSelector(state.products.favs)
        }
    }
)(Favs);