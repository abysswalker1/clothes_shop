import React from 'react';
import './nav.css'
import Search from "./search/search";
import NavList from "./nav-list/navList";

const Nav = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <nav className='nav'>
            <div className="nav__container container">
                <button className='nav__burger' type='button'
                    onClick={() => setOpen(!open)}
                >
                    <i className="bi bi-list"></i>
                </button>
                <div className='desktop-nav-list'>
                    <NavList />
                </div>
                <Search />
            </div>
        </nav>
    );
};

export default Nav;