import React, {useEffect} from 'react';
import ProductsList from "../../products-list/productsList";
import { getProductsThunk } from "../../../store/productsReducer";
import './homepage.css'
import {connect} from "react-redux";
import productsListSelector from "../../../selectors/productsListSelector";
import { MainStateType, ProductsListType } from '../../../types';

type Props = {
    productsList: ProductsListType,
    getProductsThunk: () => void
}

const HomePage: React.FC<Props> = (props) => {

    useEffect(() => {
        if(props.productsList.length <= 0) {
            props.getProductsThunk();
        }
    },[props.productsList]);

    return (
        <div className='homepage container'>
            <ProductsList productsList={props.productsList}/>
        </div>
    );
};

const mapStateToProps = (state: MainStateType) => {
    return {
        productsList: productsListSelector(state.products.productsList)
    }
}

export default connect(mapStateToProps, { getProductsThunk })(HomePage);