import React, { useEffect } from 'react';
import './header.css'
import HeaderMain from "./header-main/headerMain";
import Nav from './nav/nav';
import Categories from '../categories/categories';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [expanded, setExpanded] = React.useState(false);
    const [openCategories, setOpenCategories] = React.useState(false); 

    let location = useLocation();

    useEffect(() => {
        setExpanded(false)
    }, [location]);

    useEffect(() =>{
        if( !expanded ){
            setOpenCategories(false)
        }
    }, [expanded])

    const expandMobileMenu = (value?: boolean): void => {
        //@ts-ignore
        if( typeof value === Boolean ) {
            setExpanded(value)
        } else setExpanded(!expanded)
    }

    const unwrapCategoriesMenu = (): void => {
        setOpenCategories(!openCategories)
    }

    return (
        <header className={`header ${(openCategories) ? 'unwrapped' : ''}`}>
           <HeaderMain openMenu={expandMobileMenu} />
           <div className={`mobile-menu ${(expanded) ? 'expanded': ''}`}>
                <div className="mobile-menu__nav">
                    <div className="mobile-menu__nav-container container">
                        <Nav openCategories={unwrapCategoriesMenu} categoriesOpened={openCategories}/>
                    </div>
                </div>
                <div className={`mobile-menu__categories`}>
                    <Categories />
                </div>
           </div>
        </header>
    );
};

export default Header;