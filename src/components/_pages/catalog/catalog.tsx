import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {setSpecificCategoryThunk} from "../../../store/productsReducer";
import ProductsList from "../../products-list/productsList";
import productsListSelector from "../../../selectors/productsListSelector";
import { MainStateType, SpecificCategoryType, ProductType } from '../../../types';
import Sidebar from '../../sidebar/sidebar';
import './catalog.css'

type Props = {
    specificCategories: Array<SpecificCategoryType>
    products: Array<ProductType>,
    setSpecificCategoryThunk: (title: string) => void
}

const Catalog : React.FC<Props> = (props) => {
    const { title } = useParams();
    const [category , setCategory] = React.useState([]);

    useEffect(() => {
        let neededCategory = props.specificCategories.filter(item => item[0] === title);

        if(!title) {
            setCategory(productsListSelector(props.products))
        } else if( neededCategory.length > 0) {
            setCategory(productsListSelector(neededCategory[0][1]))
        } else {
            props.setSpecificCategoryThunk(title);
        }
    }, [title, props.specificCategories, props.products])

    return (
        <main className='main'>
            <div className="main__container container">
                <Sidebar />
                <div className='catalog'>
                    <h1 className="catalog__title">{title}</h1>
                    <ProductsList  productsList={category}/>
                </div> 
            </div>
        </main>
    );
};

const mapStateToProps = (state: MainStateType) => {
    return {
        specificCategories: state.products.specificCategories,
        products: state.products.productsList
    }
}

export default compose(
    connect(mapStateToProps, { setSpecificCategoryThunk }),
)(Catalog);