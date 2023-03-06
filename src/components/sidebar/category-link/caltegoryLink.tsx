import React from 'react';
import './categoryLink.css'
import {Link} from "react-router-dom";

const CaltegoryLink = (props: any) => {
    return (
        <div className='category-link'>
            <Link to={`products/category/${props.category}`}>{props.category}</Link>
        </div>
    );
};

export default CaltegoryLink;