import React, {useEffect} from 'react';
import Categories from '../categories/categories';
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h2 className="sidebar__categories-title">Категории</h2>
            <Categories />
        </div>
    );
};



export default Sidebar;