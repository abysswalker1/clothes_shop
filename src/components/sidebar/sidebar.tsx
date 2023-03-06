import React, {useEffect} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {getCategoryHighSelector} from "../../selectors/categorySelector";
import {getCategoriesThunk} from "../../store/productsReducer";
import './sidebar.css'
import { MainStateType, ProductsListType, ThunkType } from '../../types';

type Props = {
    categories: ProductsListType
    getCategoriesThunk: () => ThunkType
}

const Sidebar: React.FC<Props> = (props) => {

    useEffect(() => {
        props.getCategoriesThunk();
    },[])

    return (
        <div className='sidebar'>
            <div className="sidebar__categories">
                <h2 className="sidebar__categories-title">Категории</h2>
                {props.categories}
            </div>
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
)(Sidebar);