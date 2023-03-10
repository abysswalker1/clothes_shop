import React from 'react';
import {Link} from "react-router-dom";
import './headerMain.css';
import {connect} from "react-redux";
import { MainStateType, ProductType } from '../../../types';
import { CartProductType } from '../../../store/cartReducer';
import Nav from '../nav/nav';
import Search from '../search/search';

type Props = {
    cart: CartProductType[],
    favs: ProductType[]
    openMenu: (value?: boolean) => void
}

const HeaderMain: React.FC<Props> = ({cart, favs, ...props}) => {
    const mobileMenuExpand = () => {
        props.openMenu();
    } 

    return (
        <div className='header-main'>
            <div className="header-main__container container">

                <div className="header-main__logo">
                    <button className="header-main__mobile-menu-btn" 
                            onClick = {() => mobileMenuExpand()}
                            type='button'>
                        <i className="bi bi-list"></i>
                    </button>
                    <Link to={'/'}>LOGO</Link>
                </div>

                <div className="header-main__nav">
                    <Nav />
                </div>

                <div className="header-main__links">
                    <Search />

                    <Link to={'/favorites'}>
                        <div className="header-main__links-item">
                            <i className="bi bi-suit-heart"></i>
                            { favs.length > 0 && <div className="header-main__links-messages">{favs.length}</div>}
                        </div>
                    </Link>

                    <Link to={'/cart'}>
                        <div className="header-main__links-item">
                            <i className="bi bi-cart3"></i>
                            { cart.length > 0 && <div className="header-main__links-messages">{cart.length}</div>}
                        </div>
                    </Link>
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