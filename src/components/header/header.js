import React from 'react';
import PreHeader from "./pre-header/preHeader";
import './header.css'
import HeaderMain from "./header-main/headerMain";
import Nav from "./nav/nav";

const Header = () => {
    return (
        <header className='header'>
           <PreHeader />
           <HeaderMain />
           <Nav />
        </header>
    );
};

export default Header;