import React from 'react';
import './productCard.css';

const ProductCard = ({item}) => {
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
        <div className='product-card'
             onMouseOver={handleMouseOver}
             onMouseLeave={handleMouseLeave}
        >
            <div className="product-card__img-wrap">
                <img src={item.image} alt="" className="product-card__img" alt={item.title}/>
            </div>
            <p className="product-card__title">{title}</p>
            <h2 className="product-card__price">{item.price}</h2>
        </div>
    );
};

export default ProductCard;