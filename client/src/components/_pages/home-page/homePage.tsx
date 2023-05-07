import React, {useEffect} from 'react';
import { setSpecificCategoryThunk } from "../../../store/productsReducer";
import './homepage.css'
import {connect} from "react-redux";
import { CategoryType, CompilationType, MainStateType} from '../../../types';
import Compilation from '../../compilation/Compilation';
import ActionType from '../../../action-types';
import Loader from '../../common/loader/loader';
import ScrollTriggerWrap from '../../../HOCs/scrollTrigger';
import { compose } from 'redux';

type Props = {
    specificCategories: CompilationType[]
    isFetching: boolean
    setSpecificCategoryThunk: (title: string | string[]) => ActionType
}

const HomePage: React.FC<Props> = (props) => {

    useEffect(() => {
        props.setSpecificCategoryThunk('1');
        props.setSpecificCategoryThunk('2');
    },[]);

    

    return (
        <div className='homepage container'>
            {props.specificCategories.map(category => <Compilation item={category}/>)}
            {props.isFetching && <Loader />}
        </div>
    );
};

const mapStateToProps = (state: MainStateType) => {
    return {
        specificCategories: state.products.specificCategories,
        isFetching: state.products.isFetching
    }
}

export default compose(
    
    connect(mapStateToProps, { setSpecificCategoryThunk })
)(HomePage);