import React from 'react';
import './productCard.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addProductToFavsAction} from "../../../store/productsReducer";

const ProductCard = ({item, ...props}) => {
    let shortedTitle = (item.title?.length > 50)
        ? item.title.slice(0, 46) + '...'
        : item.title;

    let [title, setTitle] = React.useState(shortedTitle);

    const handleMouseOver = () => {
        setTitle(item.title)
    }

    const handleMouseLeave = () => {
        setTitle(shortedTitle)
    }

    return (
        <div className='product-card_wrap'>
            <Link to={`/products/${item.id}`}
                  className="product-card"
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
            >
                <div className="product-card__img-wrap">
                    <img src={item.image} alt="" className="product-card__img" alt={item.title}/>
                </div>
                <p className="product-card__title">{title}</p>
                <h2 className="product-card__price">{item.price}</h2>
            </Link>

            <button className="product-card__add-to-favs"
                    onClick={() => props.addProductToFavsAction(item)}
            >
                <i className="bi bi-suit-heart"></i>
            </button>
        </div>
    );
};

export default connect(null, { addProductToFavsAction })(ProductCard);