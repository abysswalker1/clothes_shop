import React from "react";
import {connect} from "react-redux";

const isFetchingWrap = (Component, props) => {
    debugger
    // if(props.isFetching) return;
    return <Component {...props} />;
}

export default connect(state => {
    return {
        isFetching: state.products.isFetching
    }
})(isFetchingWrap);