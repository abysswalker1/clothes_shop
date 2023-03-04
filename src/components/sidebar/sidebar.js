import React, {useEffect} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {getCategoryHighSelector} from "../../selectors/categorySelector";
import {getCategoriesThunk} from "../../store/productsReducer";
import './sidebar.css'

const Sidebar = (props) => {

    useEffect(() => {
        props.getCategoriesThunk();
    },[])

    return (
        <div className='sidebar'>
            <div className="sidebar__categories">
                <h2 className="sidebar__categories-title">Категории</h2>
                {props.categories || ''}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: getCategoryHighSelector(state.products)
    }
}

export default compose(
    connect(mapStateToProps, { getCategoriesThunk })
)(Sidebar);