import React from 'react';
import {Link} from "react-router-dom";
import './headerMain.css';
import Contacts from "../../common/contacts/contacts";
import Button from "react-bootstrap/Button";

const HeaderMain = () => {
    return (
        <div className='header-main'>
            <div className="header-main__container container">

                <div className="header-main__logo">
                    <Link to={'./'}>LOGO</Link>
                </div>

                <div className="header-main__links">
                    <Link to={'/'}>
                        <div className="header-main__links-item">
                            <i className="bi bi-suit-heart"></i>
                            Избранное <span>(0)</span>
                        </div>
                    </Link>

                    <Link to={'/'}>
                        <div className="header-main__links-item">
                            <i className="bi bi-cart3"></i>
                            Корзина <span>(0)</span>
                        </div>
                    </Link>

                    <Contacts />
                </div>

                <div className="header-main__btn-wrap">
                    <Button className='std-button'>
                        Перезвони мне
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;