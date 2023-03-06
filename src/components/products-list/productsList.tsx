import React from 'react';
import './productsList.css'
import {connect} from "react-redux";
import Loader from "../common/loader/loader";
import { ProductsListType, ProductType, MainStateType } from '../../types';

type Props = {
    productsList: ProductsListType,
    isFetching: boolean
}

const ProductsList: React.FC<Props> = (props) => {

    if( props.isFetching ) {
        return <Loader />
    }

    if(!props.productsList.length) {
        return <p>Ничего не найдено</p>
    }

    return (
        <div className='products-list'>
            <>{props.productsList}</>
        </div>
    );
};

export default connect((state: MainStateType )=> ({
    isFetching: state.products.isFetching
})
)(ProductsList);