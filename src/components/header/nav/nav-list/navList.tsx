import React from 'react';
import '../nav.css'
import NavItem from "../nav-item/navItem";

const NavList = () => {
    return (
        <div className="nav__list">
            <NavItem href='/' >Для мужщин</NavItem>
            <NavItem href='/' >Для женщин</NavItem>
            <NavItem href='/'
                     subLinks={ [{text: 'Вакансии', href: '/'}, {text: 'Полезно знать', href: '/'}] }
            > О нас </NavItem>
            <NavItem href='/' >Образы</NavItem>
            <NavItem href='/'
                     subLinks={ [{text: 'Как купить', href: '/'}] }
            > Доставка и оплата </NavItem>
            <NavItem href='/' >Отзывы</NavItem>
            <NavItem href='/'>Контакты</NavItem>
            <NavItem href='/' subClass='nav-sale'>Акции</NavItem>
        </div>
    );
};

export default NavList;