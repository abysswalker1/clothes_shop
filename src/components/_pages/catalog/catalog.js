import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {setSpecificCategoryThunk} from "../../../store/productsReducer";
import ProductsList from "../../products-list/productsList";
import productsListSelector from "../../../selectors/productsListSelector";

const Catalog = (props) => {
    const { title } = useParams();
    const [category, setCategory] = React.useState([]);

    useEffect(() => {
            let neededCategory = props.specificCategories.filter(item => item[0] === title);

            if( neededCategory.length > 0) {
                setCategory(productsListSelector(neededCategory[0][1]))
            } else {
                props.setSpecificCategoryThunk(title);
            }
    },[title, props.specificCategories])

    return (
        <div className='catalog'>
            <h1 className="catalog__title">{title}</h1>
            <ProductsList  productsList={category}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        specificCategories: state.products.specificCategories,
    }
}

export default compose(
    connect(mapStateToProps, { setSpecificCategoryThunk }),
)(Catalog);