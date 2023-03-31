import React from 'react';
import Categories from '../categories/categories';
import Pricepicker from '../price-picker/Pricepicker';
import './sidebar.css';

type Props = {
    
}

const Sidebar: React.FC<Props> = (props) => { 

    return (
        <div className='sidebar'>
            <h2 className="sidebar__categories-title">Категории</h2>
            <Categories />
            <Pricepicker />
        </div>
    );
};



export default Sidebar;