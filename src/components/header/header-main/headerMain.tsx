import React from 'react';
import {Link} from "react-router-dom";
import './headerMain.css';
import Contacts from "../../common/contacts/contacts";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import { MainStateType, ProductType } from '../../../types';
import { CartProductType } from '../../../store/cartReducer';

type Props = {
    cart: CartProductType[],
    favs: ProductType[]
}

const HeaderMain: React.FC<Props> = ({cart, favs}) => {
    return (
        <div className='header-main'>
            <div className="header-main__container container">

                <div className="header-main__logo">
                    <Link to={'./'}>LOGO</Link>
                </div>

                <div className="header-main__links">
                    <Link to={'/favorites'}>
                        <div className="header-main__links-item">
                            <i className="bi bi-suit-heart"></i>
                            Избранное <span>({favs.length})</span>
                        </div>
                    </Link>

                    <Link to={'/cart'}>
                        <div className="header-main__links-item">
                            <i className="bi bi-cart3"></i>
                            Корзина <span>({cart.length})</span>
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

export default connect(
    (state: MainStateType) => {
        return {
            favs: state.products.favs,
            cart: state.cart.cartList
        }
    }
)(HeaderMain);