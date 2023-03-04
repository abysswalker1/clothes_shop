import React, {useEffect} from 'react';
import ProductsList from "../../products-list/productsList";
import {getProductsThunk} from "../../../store/productsReducer";
import './homepage.css'
import {connect} from "react-redux";
import productsListSelector from "../../../selectors/productsListSelector";

const HomePage = (props) => {

    useEffect(() => {
        if(props.productsList.length <= 0) {
            props.getProductsThunk();
        }
    },[props.productsList]);

    return (
        <div className='homepage'>
            <ProductsList productsList={props.productsList}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        productsList: productsListSelector(state.products.productsList)
    }
}

export default connect(mapStateToProps, { getProductsThunk })(HomePage);