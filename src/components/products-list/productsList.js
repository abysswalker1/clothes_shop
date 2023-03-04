import React from 'react';
import './productsList.css'
import {connect} from "react-redux";
import Loader from "../common/loader/loader";

const ProductsList = (props) => {

    if( props.isFetching ) {
        return <Loader />
    }

    if(!props.productsList.length) {
        return 'Ничего не найдено'
    }

    return (
        <div className='products-list'>
            {props.productsList}
        </div>
    );
};

export default connect(state => ({isFetching: state.products.isFetching}))(ProductsList);