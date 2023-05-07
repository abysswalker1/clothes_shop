import React, { useEffect } from 'react';
import './productsList.css'
import {connect} from "react-redux";
import Loader from "../common/loader/loader";
import { ProductsListType, ProductType, MainStateType } from '../../types';
import { changePageAction } from '../../store/productsReducer';

type Props = {
    productsList: ProductsListType,
    isFetching: boolean
    loadMore?: () => void 
}

const ProductsList: React.FC<Props> = (props) => {
    if(!props.productsList.length) {
        return <p>Ничего не найдено</p>
    }

    return (
        <div className='products-list'>
            <>{props.productsList}</>
            {props.isFetching  && <Loader />}
            <button onClick={props.loadMore}>загрузить больше</button>
        </div>
    );
};

export default connect((state: MainStateType )=> ({
    isFetching: state.products.isFetching
}), {changePageAction}
)(ProductsList);