import React from 'react';
import './categoryLink.css'
import {Link} from "react-router-dom";
import { CategoryType } from '../../../types';

type Props = {
    item: CategoryType
}

const CaltegoryLink: React.FC<Props> = ({item}) => {
    return (
        <div className='category-link'>
            <Link to={`/products/category/${item.category_id}`}>{item.category_title}</Link>
        </div>
    );
};

export default CaltegoryLink;